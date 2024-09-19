"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Signup.module.css';
import Navbar from '../components/Navbar/Navbar';
import signup from '../services/signup-service';
import Form from '../components/Form/Form';

const Signup = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password==secondPassword){
      try {
        const result = await signup(nombre, apellido, email, password);
        if (result>0) {
          const token = result.token;
          localStorage.setItem('token', token);
          router.push('/events');
        } else {
          setError("Usuario o contraseña incorrecta, vuelve a ingresar los datos.");
        }
      } catch (error) {
        setError("Hubo un problema al registrarse. Inténtalo de nuevo más tarde.");
        console.log(error);
      }
    } else {
      setError("Las contraseñas no coinciden prro :v");
    }
  };

  return (
    <Navbar>
      <div className={styles.signupContainer}>
        <Form
          title="¡Hola!"
          buttonText="Registrarse"
          fields={[
            { 
              label: 'Nombre', 
              type: 'default', 
              placeholder: 'Name', 
              value: nombre, 
              onChange: (e) => setNombre(e.target.value)
            },
            { 
              label: 'Apellido', 
              type: 'default', 
              placeholder: 'Last name', 
              value: apellido, 
              onChange: (e) => setApellido(e.target.value)
            },
            { 
              label: 'Email', 
              type: 'email', 
              placeholder: 'Email', 
              value: email, 
              onChange: (e) => setEmail(e.target.value)
            },
            { 
              label: 'Contraseña', 
              type: 'password', 
              placeholder: 'Password', 
              value: password, 
              onChange: (e) => setPassword(e.target.value) 
            },
            { 
              label: 'Repite la Contraseña', 
              type: 'password', 
              placeholder: 'Password', 
              value: secondPassword, 
              onChange: (e) => setSecondPassword(e.target.value) 
            },
          ]}
          onSubmit={handleSubmit}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    </Navbar>
  );
}

export default Signup;
