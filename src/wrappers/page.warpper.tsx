import React from 'react';

import { MainWrapper } from './styles';
import { Appbar } from 'components/appbar';
import { UploadBlock } from 'components/upload-block';

export const PageWrapper = () => {
   return (
      <MainWrapper>
         <Appbar />
         <UploadBlock />
      </MainWrapper>
   );
};
