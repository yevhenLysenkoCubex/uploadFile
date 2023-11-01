import React from 'react';
import {
   styled,
   Typography,
   TypographyProps,
   ButtonProps,
   Button,
   Box,
   BoxProps,
   IconButton,
   IconButtonProps,
} from '@mui/material';

export const MainWrapper = styled(({ children, ...props }: BoxProps) => (
   <Box component='main' pt={3.75} pb={3.75} pl={3.5} pr={3.5} mt={7.5} {...props}>
      {children}
   </Box>
))(({ theme }) => ({
   width: '100vw',
   height: 'calc(100vh - 60px)',
   display: 'flex',
   background: '#F3F3F9',
}));
