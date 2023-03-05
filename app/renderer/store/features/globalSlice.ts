import { createSlice } from '@reduxjs/toolkit';

export interface GloablState {
  /**
   * @description 项目路径
   */
  rootPath: string;
}

const initialState: GloablState = {
  rootPath: '',
}

// 创建一个Slice
export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      // action里面有type和payload两个属性，所有的传参都在payload里面
      // state.value += payload.value;
    },
  }
})

// 导出加减的方法
export const { increment } = globalSlice.actions;

// 默认导出
export default globalSlice.reducer;