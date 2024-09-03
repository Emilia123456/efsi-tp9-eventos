"use client";
import Navbar from './components/navbar';
 // Esto indica que este componente es un Client Component

import Link from 'next/link';

export default function Home() {
  return (
    
      <div >
        <h2>Bienvenido a Eventos</h2>
        <div>
          <Link href="/login"><button>Login</button></Link>
          <Link href="/signup"><button>Sign Up</button></Link>
        </div>
      </div>

  );
}
