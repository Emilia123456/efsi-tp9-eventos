"use client"; 
import styles from './Login.module.css';
import { useRouter } from 'next/navigation'; 
import react from 'react';
import Navbar from '../components/Navbar/Navbar';
import Form from '../components/Form/Form';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const result = await login(email, password);

      if (result.success) {  
        router.push('/events');
      } else {
        window.alert("Error", "Hubo un problema al iniciar sesión. Inténtalo de nuevo más tarde.");   
      }

    } catch (error) {
      window.alert("Error", "Hubo un problema al iniciar sesión. Inténtalo de nuevo más tarde.");
    }
  };

  return (
    <Navbar>
      <div className={styles.loginContainer}>
      <Form 
        title="¡Hola de nuevo!" 
        buttonText="Iniciar sesión"
        fields={[
          { label: 'Email', type: 'email', placeholder: 'Email', value: email },
          { label: 'Contraseña', type: 'password', placeholder: 'Password', value: password },
        ]}        
        onSubmit={handleLogin}
      />
      </div>
    </Navbar>
  );
}
