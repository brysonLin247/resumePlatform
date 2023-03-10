import React from 'react';
// ๐ ๅผๅฅ็ฎๅๆจก็
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