// app/page.js
"use client";
import Link from 'next/link';
import styles from './Home.module.css';
import Navbar from './components/navbar';
// Importamos los estilos específicos para este componente

export default function Home() {
  return (
    <Navbar>
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>Bienvenido a Eventos</h1>
        <h3 className={styles.subtitle}>¡El lugar donde puedes encontrar y crear los mejores eventos!</h3>
        <p className={styles.description}>
          Explora los eventos más recientes, conéctate con personas de intereses similares y crea tus propios eventos para compartir con los demás.
        </p>
        <div className={styles.buttonGroup}>
          <Link href="/login">
            <button className={styles.button}>Login</button>
          </Link>
          <Link href="/signup">
            <button className={styles.button}>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
    </Navbar>
  );
}
