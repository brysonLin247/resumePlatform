import { decrement, increment } from '@src/store/features/counterSlice';
import { getMovieData } from '@src/store/features/movieSlice';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import React, { useState } from 'react';

import './index.less';

function Resume() {
  // 通过useSelector直接拿到store中定义的value
  const { value } = useAppSelector((store) => store.counter)
  const { list } = useAppSelector((store) => store.movie)
  const [amount, setAmount] = useState(1);

  // 通过useDispatch派发事件
  const dispatch = useAppDispatch()
  return <div>
    <span>我是简历模块</span>
    <p>{value}</p>
    <input value={amount} onChange={(e) => setAmount(+e.target.value)} />
    <button onClick={() => dispatch(increment({ value: amount }))}>加</button>
    <button onClick={() => dispatch(decrement())}>减</button>
    <button onClick={() => { dispatch(getMovieData()) }}>获取数据</button>
    <ul>
      {
        list.map((item) => { return <li key={item.tvId}> {item.name}</li> })
      }
    </ul>
  </div>;
}
export default Resume;