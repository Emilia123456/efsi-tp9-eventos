// pages/signup.js
"use client"; // Esto indica que este componente es un Client Component

import Navbar from "../components/navbar";


export default function Signup() {
  return (
      <div >
        <h2>Registro</h2>
        <form >
          <div>
            <label>Nombre</label>
            <input type="text" placeholder="Nombre" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
  );
}
