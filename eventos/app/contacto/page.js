"use client"; 
import Navbar from '../components/Navbar/Navbar';
import styles from './Contacto.module.css';

export default function Contacto() {
  return (
    <Navbar>
    <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Contacto</h2>
      <p className={styles.contactText}>
        Si tenes alguna pregunta, no dudes en contactarnos a través de los siguientes medios:
      </p>
      
      <div className={styles.contactDetails}>
        <p><strong>Email:</strong> contacto@eventos.com</p>
        <p><strong>Teléfono:</strong> +11 1234-5678</p>
        <p><strong>Dirección:</strong> Mi casa 123, CABA, Argentina</p>
      </div>
    </div>
    </Navbar>
  );
} 
