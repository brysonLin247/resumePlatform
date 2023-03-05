import React from 'react';
// 👇 引入简历模版
import * as UseTemplateList from './useTemplates';

import MyScrollBox from '@common/components/MyScrollBox';

function Content() {
  const HEADER_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;

  return (
    <MyScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <UseTemplateList.TemplateOne />
    </MyScrollBox>
  );
}
export default Content;