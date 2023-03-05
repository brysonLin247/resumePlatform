// 获取项目绝对路径
export const getAppPath = async () => {
  try {
    const appPath = await window.api.getAppPath();
    return appPath;
  }catch(err){
    throw new Error('项目路径错误')
  }
}

