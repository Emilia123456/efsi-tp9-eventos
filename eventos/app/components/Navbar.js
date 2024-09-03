
"use client"; // Esto convierte el componente en un Client Component

import Link from 'next/link';

const Navbar = ({ children }) => {
  return (
    <div >
      <header>
        <div >
          <h1>Eventos</h1>
        </div>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </nav>
        <div >
          <span>Usuario</span> {/* Solo visible si el usuario está logueado */}
          <button>Cerrar Sesión</button>
        </div>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer>
        <p>&copy; 2024 Eventos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Navbar;
