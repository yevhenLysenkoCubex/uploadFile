import React from 'react';
import { Box, AppBar, Typography, Avatar, IconButton } from '@mui/material';

import { Icon } from 'components/icon';
import { ENUM_ICON } from 'enums/icons';

export const Appbar = () => {
   return (
      <AppBar position='fixed' className='PrimaryAppbar'>
         <Box component='div'>
            <Typography component='p' className='ScodixAI'>
               Scodix AI
            </Typography>
         </Box>
         <Box component='div' display='flex' gap={2.5}>
            <IconButton>
               <Icon name={ENUM_ICON.SETTINGS} />
            </IconButton>
            <Avatar className='UserAvatar'>E</Avatar>
         </Box>
      </AppBar>
   );
};
