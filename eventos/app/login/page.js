"use client"; 
import styles from './Login.module.css';
import { useRouter } from 'next/navigation'; 
import Navbar from '../components/navbar';

export default function Login() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/events');
  };

  return (
    <Navbar>
      <div className={styles.loginContainer}>
        
        <form className={styles.formContent} onSubmit={handleLogin}>
          <h2 className={styles.loginTitle}>Logueate!</h2>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className={styles.formGroup}>
            <label>Contraseña</label>
            <input type="password" placeholder="Password" />
          </div>
          <button className={styles.loginButton} type="submit">Iniciar sesión</button>
        </form>
      </div>
    </Navbar>
  );
}
