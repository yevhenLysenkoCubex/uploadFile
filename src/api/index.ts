import axios from 'axios';

const scodixAiInstance = axios.create({
   baseURL: 'https://api.scodix.org',
   headers: {
      Accept: 'application/json',
   },
});

const bearerToken =
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUyLCJpYXQiOjE2OTgzMjY2ODYsImV4cCI6MzMyNTUyNzg2ODZ9.z9JfwHXNe9Q-iAgPdF35hWXU1QRFoaH-Au6d8OtEqEQ';
scodixAiInstance.defaults.headers.common['Authorization'] = `Bearer ${bearerToken}`;

export default scodixAiInstance;
