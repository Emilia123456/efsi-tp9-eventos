import axios from 'axios';

const userApi = axios.create({
  baseURL: 'http://localhost:3001/api/user',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default async function signup (nombre, apellido, email, password) {
    try {
      const response = await userApi.post('/register', {
        first_name: nombre,
        last_name: apellido,
        username: email,
        password: password, 
      });
      
  
      return response.data;  
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  };
  
  
