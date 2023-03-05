const { contextBridge, ipcRenderer } = require("electron")

const api = {
  getAppPath: () => ipcRenderer.invoke('root-path')
}


if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.log(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.api = api
}
