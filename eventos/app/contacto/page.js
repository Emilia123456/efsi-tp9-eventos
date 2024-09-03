// pages/contacto.js
"use client"; // Esto indica que este componente es un Client Component

import styles from './Contacto.module.css';

export default function Contacto() {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Contacto</h2>
      <p className={styles.contactText}>
        Si tienes alguna pregunta, no dudes en contactarnos a través de los siguientes medios:
      </p>
      
      <div className={styles.contactDetails}>
        <p><strong>Email:</strong> contacto@eventos.com</p>
        <p><strong>Teléfono:</strong> +34 123 456 789</p>
        <p><strong>Dirección:</strong> Calle Falsa 123, Madrid, España</p>
      </div>
    </div>
  );
}
