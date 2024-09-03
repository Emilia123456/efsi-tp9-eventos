// pages/login.js
"use client"; // Esto indica que este componente es un Client Component
import Navbar from "../components/navbar";


export default function Login() {
  return (
      <div >
        <h2>Login</h2>
        <form >
          <div>
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
  );
}
