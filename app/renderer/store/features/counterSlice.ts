import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
  title: string;
}

const initialState: CounterState = {
  value: 0,
  title: 'redux toolkit pre'
}

// 创建一个Slice
export const counterSlice = createSlice({
  name:'counter',
  initialState,
  reducers:{
    increment: (state,{payload}) => {
      // action里面有type和payload两个属性，所有的传参都在payload里面
      state.value += payload.value;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
})

// 导出加减的方法
export const { increment, decrement } = counterSlice.actions;

// 默认导出
export default counterSlice.reducer;