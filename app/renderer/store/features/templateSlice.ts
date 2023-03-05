import { createSlice } from '@reduxjs/toolkit';

export interface TemplateState {
  /**
   * @description 项目路径
   */
   resumeToolbarKeys: string[];
}

const initialState: TemplateState = {
  resumeToolbarKeys: [],
}

// 创建一个Slice
export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    setResumeToolbarKeys: (state, { payload }) => {
      // action里面有type和payload两个属性，所有的传参都在payload里面
      state.resumeToolbarKeys = payload.value
    },
  }
})

// 导出加减的方法
export const { setResumeToolbarKeys } = templateSlice.actions;

// 默认导出
export default templateSlice.reducer;