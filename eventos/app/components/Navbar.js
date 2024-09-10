"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css'; 

const Navbar = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
        <img src="/assets/logo.png" alt="Logo2" className={styles.logo} />  {/* NO SE VE EL LOGO */}
          <h1 className={styles.title}>Eventos</h1>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
             <li className={styles.navItem}><Link href="/">Home</Link></li>
            <li className={styles.navItem}><Link href="/contacto">Contacto</Link></li>

          </ul>
        </nav>
        <div className={styles.userInfo}>
          <span>Usuario</span> 
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
