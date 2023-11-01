import React from 'react';
import { Box } from '@mui/material';

import { MainWrapper } from './styles';
import { Appbar } from 'components/appbar';
import { UplaodBlock } from 'components/upload-block';

export const PageWrapper = () => {
   return (
      <MainWrapper>
         <Appbar />
         <UplaodBlock />
      </MainWrapper>
   );
};
