// utils/authMiddleware.js

export default function authMiddleware(router) {
  if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      
      // Si no hay token, redirige al login
      if (!token) {
          router.push('/login');
      } 
      // Si ya está logueado y la ruta es '/signup', redirige a '/events'
      else if (router.pathname === '/signup') {
          router.push('/events');
      }
  }
}
