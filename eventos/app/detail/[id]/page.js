"use client"; 

import { useState, useEffect, useContext } from 'react';
import { useParams } from 'next/navigation'; 
import { EventContext } from '@/app/context/EventContext'; 
import { useRouter } from 'next/navigation';
import styles from '../Details.module.css';
import Navbar from '@/app/components/Navbar/Navbar';

export default function EventDetails() {  
  const { id } = useParams();  
  const { eventos } = useContext(EventContext);
  const [event, setEvent] = useState(null); 
  const router = useRouter();

  useEffect(()=>{
    let tieneTok = localStorage.getItem('token')
    if(!tieneTok){
      router.push('/login');
    }
  },[])

  useEffect(() => {
    console.log("ID desde la URL:", id);
    console.log("Eventos disponibles:", eventos); 

    if (id && eventos.length > 0) {
      const selectedEvent = eventos.find(evento => evento.id === parseInt(id));
      if (selectedEvent) {
        setEvent(selectedEvent); 
      } else {
        console.warn(`No se encontró un evento con el id: ${id}`);
      }
    }
  }, [id, eventos]); 

  if (!event) return <p>Cargando evento...</p>;

  return (
    <Navbar>
      <main className={styles.detailsContainer}>
        <h1 className={styles.eventTitle}>{event.name}</h1>
        <p className={styles.eventDescription}>{event.description}</p>
        <p className={styles.eventDate}>
          <strong>Fecha:</strong> {new Date(event.start_date).toLocaleDateString('es-ES')}
        </p>
      </main>
    </Navbar> 
  );
}
