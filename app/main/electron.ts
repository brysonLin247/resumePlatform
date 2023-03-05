const path = require('path');
const {
  ipcMain,
  app,
  BrowserWindow
} = require('electron');

const isDev = () => {
  return process.env.NODE_ENV === 'development';
}

const ROOT_PATH = path.join(app.getAppPath(), '../')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      contextIsolation: false,
      // preload:'E:\\learning\\resumePlatform\\app\\main\\preload.ts',
      // preload: path.join(__dirname, '../app/main/preload.ts'),
      // preload: path.join(app.getAppPath(),'../app/main/preload.ts')
      preload: path.join(app.getAppPath(),'../app/preload/index.ts')
    }
  })


  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:7001`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
  }
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle('root-path', () => ROOT_PATH)

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})



