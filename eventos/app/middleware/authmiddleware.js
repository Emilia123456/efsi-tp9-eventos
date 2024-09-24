// utils/authMiddleware.js

export default function authMiddleware(router) {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      
      // Si no hay token, redirige al login
      if (!token) {
        router.push('/login');
      }
    }
  }
  