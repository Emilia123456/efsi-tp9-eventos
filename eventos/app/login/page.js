
"use client"; 

import { useRouter } from 'next/navigation'; 

export default function Login() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    router.push('/events');
  };

  return (
    <div >
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
