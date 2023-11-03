import React from 'react';
import { styled, Box, BoxProps } from '@mui/material';

interface InnerWrapperProps extends BoxProps {
   dragisover: 'true' | 'false';
}

export const UploadBlockWrapper = styled(({ children, ...props }: BoxProps) => (
   <Box component='div' borderRadius={1.25} p={3.125} {...props}>
      {children}
   </Box>
))(({ theme }) => ({
   width: '100%',
   height: '435px',
   display: 'flex',
   background: '#fff',
}));

export const InnerWrapper = styled(({ children, ...props }: InnerWrapperProps) => (
   <Box component='div' borderRadius={0.625} gap={2.5} {...props}>
      {children}
   </Box>
))(({ theme, dragisover }) => ({
   width: '100%',
   height: '100%',
   display: 'flex',
   background: dragisover === 'false' ? '#fff' : 'rgba(190, 167, 113, 0.05)',
   border: dragisover === 'false' ? 'none' : '1px dashed #DFDFDF',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
}));
