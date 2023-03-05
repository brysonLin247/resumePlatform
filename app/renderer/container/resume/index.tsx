import { getAppPath } from '@src/common/utils/appPath';
import fileAction from '@src/common/utils/file';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import React, { useState } from 'react';
import Action from './action';
import Content from './content';
import Toolbar from './toolbar';

import './index.less';

function Resume() {
  // 通过useSelector直接拿到store中定义的value
  // const { value } = useAppSelector((store) => store.counter)
  // const { list } = useAppSelector((store) => store.movie)
  // const [amount, setAmount] = useState(1);

  // getAppPath().then((rootPath: string) => {
  //   console.log('应用程序的目录路径为: ', rootPath);
  //   console.log('文件读取，内容数据为: ');
  //   fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`)
  //     .then((data) => {
  //       console.log(data)
  //     })
  // })

  // 通过useDispatch派发事件
  // const dispatch = useAppDispatch()

  // fileAction.read(`${window.app.getAppPath()}app/renderer/container/resume/index.tsx`).then((data) => {
  //   console.log(data)
  // })

  // return <div>
  //   <span>我是简历模块</span>
  //   <p>{value}</p>
  //   <input value={amount} onChange={(e) => setAmount(+e.target.value)} />
  //   <button onClick={() => dispatch(increment({ value: amount }))}>加</button>
  //   <button onClick={() => dispatch(decrement())}>减</button>
  //   <button onClick={() => { dispatch(getMovieData()) }}>获取数据</button>
  //   <ul>
  //     {
  //       list.map((item) => { return <li key={item.tvId}> {item.name}</li> })
  //     }
  //   </ul>
  // </div>;

  return (
    <div styleName="container">
    <div styleName="header">
      <Action />
    </div>
    <div styleName="content">
      <Content />
    </div>
    <div styleName="toolbar">
      <Toolbar />
    </div>
  </div>
  )
}
export default Resume;