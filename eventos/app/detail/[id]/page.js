"use client"; 

import { useRouter } from 'next/router'; 
import { useState, useEffect } from 'react';
import styles from '../Details.module.css';
import Navbar from '@/app/components/navbar';

export default function EventDetails({ params }) {  
  const { id } = params;   
  const [event, setEvent] = useState(null);  


  useEffect(() => {
    const eventsData = [
      { id: 1, title: "Concierto de Rock", date: "2024-09-10", location: "Madrid", description: "Un concierto increíble con las mejores bandas de rock." },
      { id: 2, title: "Exposición de Arte", date: "2024-09-12", location: "Barcelona", description: "Una exposición que reúne a los mejores artistas contemporáneos." },
      { id: 3, title: "Feria de Tecnología", date: "2024-09-15", location: "Valencia", description: "Explora las últimas innovaciones tecnológicas y startups." },
    ];

    const selectedEvent = eventsData.find(event => event.id === parseInt(id));
    setEvent(selectedEvent);
  }, [id]);

  if (!event) return <p>Cargando evento...</p>;

  return (
    <Navbar>
    <main className={styles.detailsContainer}>
      <h1 className={styles.eventTitle}>{event.title}</h1>
      <p className={styles.eventDate}><strong>Fecha:</strong> {event.date}</p>
      <p className={styles.eventLocation}><strong>Ubicación:</strong> {event.location}</p>
      <p className={styles.eventDescription}>{event.description}</p>
    </main>
    </Navbar>
  );
}
