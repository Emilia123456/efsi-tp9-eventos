"use client"; 
import styles from './Login.module.css';
import { useRouter } from 'next/navigation'; 
import Navbar from '../components/Navbar/Navbar';
import Form from '../components/Form/Form';

export default function Login() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/events');
  };

  return (
    <Navbar>
      <div className={styles.loginContainer}>
      <Form 
        title="¡Hola de nuevo!" 
        buttonText="Iniciar sesión"
        fields={[
          { label: 'Email', type: 'email', placeholder: 'Email' },
          { label: 'Contraseña', type: 'password', placeholder: 'Password' },
        ]}
        onSubmit={handleLogin}
      />
      </div>
    </Navbar>
  );
}
