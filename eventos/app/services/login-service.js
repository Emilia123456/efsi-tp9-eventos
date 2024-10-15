import axios from 'axios';

const userApi = axios.create({
  baseURL: 'http://localhost:3001/api/user',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default async function login(email, password) {
    try {
      const response = await userApi.post('/login', {
        username: email,
        password: password, 
      });
  
      return response.data;  
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  }; 
  
