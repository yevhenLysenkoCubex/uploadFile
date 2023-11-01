import api from 'api';

export const serviceSendFile = (file: FormData) => {
   return api.post('/api/v1/estimator/files/upload/scodixai/', file, {
      headers: {
         'Content-Type': 'multipart/form-data',
      },
   });
};
