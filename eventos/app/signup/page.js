"use client"; 
import styles from './Signup.module.css';
import { useRouter } from 'next/navigation'; 
import Navbar from '../components/navbar';

export default function Signup() {
  const router = useRouter();

  const handlesignup = (e) => {
    e.preventDefault();
    router.push('/events');
  };

  return (
    <Navbar>
      <div className={styles.signupContainer}>
        
        <form className={styles.formContent} onSubmit={handlesignup}>
          <h2 className={styles.signupTitle}>Registrate!</h2>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className={styles.formGroup}>
            <label>Contraseña</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className={styles.formGroup}>
            <label>Repetí la contraseña</label>
            <input type="password" placeholder="Password" />
          </div>
          <button className={styles.signupButton} type="submit">Registrarse</button>
        </form>
      </div>
    </Navbar>
  );
}
