
export default function authMiddleware(router) {
  if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
    
      if (!token) {
          router.push('/login'); //si no hay token, redirige al login
      } 
      else if (router.pathname === '/signup') {
          router.push('/events');
      }
  }
}
