import { createTheme } from '@mui/material';

export const scodixAiTheme = createTheme({
   components: {
      MuiAppBar: {
         styleOverrides: {
            root: {
               '&.PrimaryAppbar': {
                  background: '#fff',
                  boxShadow: 'none',
                  padding: '10px 28px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
               },
            },
         },
      },
      MuiTypography: {
         styleOverrides: {
            root: {
               '&.ScodixAI': {
                  color: '#BEA771',
                  fontWeight: 500,
                  fontSize: '23px',
               },
               '&.DragFile': {
                  color: '#343434',
                  fontWeight: 500,
                  fontSize: '16px',
               },
               '&.FileTypes': {
                  color: '#9E9E9E',
                  fontWeight: 400,
                  fontSize: '15px',
               },
            },
         },
      },
      MuiButton: {
         styleOverrides: {
            root: {
               fontSize: '16px',
               '&.UploadFile': {
                  background: '#BEA771',
                  textTransform: 'capitalize',
                  boxShadow: 'none',
               },
            },
         },
      },
      MuiAvatar: {
         styleOverrides: {
            root: {
               '&.UserAvatar': {
                  background: '#D9D9D9',
                  width: '40px',
                  height: '40px',
               },
            },
         },
      },
   },
});
