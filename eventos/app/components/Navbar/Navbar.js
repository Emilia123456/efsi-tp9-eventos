"use client";

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/app/context/LoginContext';
import styles from '../Navbar.module.css';

const Navbar = ({ children }) => {
  const router = useRouter();
  const { user, logout } = useAuth();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const isAuthPage = pathname === '/login' || pathname === '/signup' || pathname === '/';
  const isContactPage = pathname === '/contacto'; 

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/assets/logo.png" alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>Eventos</h1>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {isAuthPage || (!user && isContactPage) ? (
              <>
                <li className={styles.navItem}><Link href="/">Inicio</Link></li>
                <li className={styles.navItem}><Link href="/contacto">Contacto</Link></li>
              </>
            ) : (
              <>
                <li className={styles.navItem}><Link href="/events">Home</Link></li>
                <li className={styles.navItem}><Link href="/contacto">Contacto</Link></li>
              </>
            )}
          </ul>
        </nav>

        <div className={styles.userInfo}>
          {user ? (
            <>
            <img src="/assets/icono.png" alt="Foto de perfil" className={styles.icono} />
              <span>{user.email}</span>
              <button onClick={handleLogout} className={styles.logoutButton}>Cerrar Sesión</button>
            </>
          ) : (
            <>
              <button onClick={() => router.push('/login')} className={styles.logoutButton}>Iniciar sesión</button>
              <button onClick={() => router.push('/signup')} className={styles.logoutButton}>Registrarse</button>
            </>
          )}
        </div>
      </header>

      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}; 

export default Navbar;
