"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Login.module.css';
import Navbar from '../components/Navbar/Navbar';
import login from '../services/login-service';
import Form from '../components/Form/Form';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await login(email, password);
      if (result.success) {
        const token = result.token;
        localStorage.setItem('token', token);
        router.push('/events');
      } else {
        setError("Usuario o contraseña incorrecta, vuelve a ingresar los datos.");
      }
    } catch (error) {
      setError("Hubo un problema al iniciar sesión. Inténtalo de nuevo más tarde.");
      console.log(error);
    }
  };

  return (
    <Navbar>
      <div className={styles.loginContainer}>
        <Form
          title="¡Hola de nuevo!"
          buttonText="Iniciar sesión"
          fields={[
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
          ]}
          onSubmit={handleSubmit}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    </Navbar>
  );
}

export default Login;
