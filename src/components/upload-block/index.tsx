import React, { DragEvent, useState, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';

import { Icon } from 'components/icon';
import { ENUM_ICON } from 'enums/icons';

import { UploadBlockWrapper, InnerWrapper } from './styles';

export const UplaodBlock = () => {
   const inputRef = useRef<HTMLInputElement | null>(null);
   const [dragIsOver, setDragIsOver] = useState(false);
   const [uploaded, setUploaded] = useState<FileList | null>(null);

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
      setDragIsOver(false);
   };

   const handleInputClick = () => {
      if (inputRef && inputRef.current) {
         inputRef.current.click();
      }
   };
   console.log('uploaded', uploaded);

   const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      setUploaded(files);
   };
   console.log('dragIsOver', dragIsOver);
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
                  multiple
                  ref={inputRef}
                  onChange={handleFileInputChange}
               />
               <Typography className='FileTypes'>PDF files, images, scan</Typography>
            </Box>
         </InnerWrapper>
      </UploadBlockWrapper>
   );
};
