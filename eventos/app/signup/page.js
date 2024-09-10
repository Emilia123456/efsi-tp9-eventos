"use client"; 
import styles from './Signup.module.css';
import { useRouter } from 'next/navigation'; 
import Navbar from '../components/Navbar/Navbar';
import Form from '../components/Form/Form';


export default function Signup() {
  const router = useRouter();

  const handlesignup = (e) => {
    e.preventDefault();
    router.push('/events');
  };

  return (
    <Navbar>
      <div className={styles.signupContainer}>
        
      <Form 
        title="¡Registrate!" 
        buttonText="Registrarse"
        fields={[
          { label: 'Email', type: 'email', placeholder: 'Email' },
          { label: 'Contraseña', type: 'password', placeholder: 'Password' },
          { label: 'Repetí la contraseña', type: 'password', placeholder: 'Password' }
        ]}
        onSubmit={handlesignup}
      />
      </div>
    </Navbar>
  );
}
