import React, { DragEvent, useState, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';

import { Icon } from 'components/icon';
import { ENUM_ICON } from 'enums/icons';
import { useAppDispatch } from 'store/hooks';
import { sendFileToServer } from 'store/files/files.slice';

import { UploadBlockWrapper, InnerWrapper } from './styles';

export const UploadBlock = () => {
   const inputRef = useRef<HTMLInputElement | null>(null);
   const dispatch = useAppDispatch();

   const [dragIsOver, setDragIsOver] = useState(false);

   const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragIsOver(true);
   };

   const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragIsOver(false);
   };

   const handleDrop = (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const files = event.dataTransfer.files;
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
         const file = files[i];
         formData.append('file', file);
      }
      dispatch(sendFileToServer(formData));
      setDragIsOver(false);
   };

   const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      const files = event.target.files;

      if (files) {
         const formData = new FormData();
         for (let i = 0; i < files.length; i++) {
            const file = files[i];
            formData.append('file', file);
         }
         dispatch(sendFileToServer(formData));
      }
   };

   const handleInputClick = () => {
      if (inputRef && inputRef.current) {
         inputRef.current.click();
      }
   };

   return (
      <UploadBlockWrapper>
         <InnerWrapper
            dragisover={dragIsOver ? 'true' : 'false'}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
         >
            <Box component='div' display='flex' flexDirection='column' alignItems='center' gap={0.625}>
               <Icon name={ENUM_ICON.UPLOAD} />
               <Typography className='DragFile' component='p'>
                  Drop your File here or
               </Typography>
            </Box>
            <Box component='div' display='flex' flexDirection='column' alignItems='center' gap={1}>
               <Button variant='contained' className='UploadFile' onClick={handleInputClick}>
                  Upload File
               </Button>
               <input
                  type='file'
                  accept='.pdf, image/*'
                  hidden
                  ref={inputRef}
                  onChange={handleFileInputChange}
               />
               <Typography className='FileTypes'>PDF files, images, scan</Typography>
            </Box>
         </InnerWrapper>
      </UploadBlockWrapper>
   );
};
