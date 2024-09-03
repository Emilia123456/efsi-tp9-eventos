"use client"; // Esto convierte el componente en un Client Component

import Link from 'next/link';
import styles from './Navbar.module.css'; // Importar como módulo

const Navbar = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          {/* Asegúrate de que la ruta al logo sea correcta */}
          <img src="/app/assets/logo.png" alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>Eventos</h1>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
             <li className={styles.navItem}><Link href="/">Home</Link></li>
            <li className={styles.navItem}><Link href="/contacto">Contacto</Link></li>

          </ul>
        </nav>
        <div className={styles.userInfo}>
          <span>Usuario</span> {/* Solo visible si el usuario está logueado */}
          <button className={styles.logoutButton}>Cerrar Sesión</button>
        </div>
      </header>
      
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default Navbar;
