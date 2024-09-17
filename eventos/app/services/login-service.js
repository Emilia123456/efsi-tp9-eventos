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
  
/* 

export const register = async (email, nombre, apellido, direccion, password, genero, foto, fecha) => {
  console.log("hola")
  try {
    const response = await userApi.post('/users/register', {
      email: email, 
      nombre: nombre,
      apellido: apellido, 
      direccion: direccion, 
      contrasena: password,
      idGenero: genero, 
      foto: foto, 
      FechaNacimiento: fecha


    });
    //if (response.satatu = 201)

    return response.data;  
  } catch (error) {
    console.error('Error fetching data:', error);
    console.error(error);
    throw error;  
  }
}; */
