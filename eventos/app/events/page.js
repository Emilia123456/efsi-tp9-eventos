"use client"; 

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import styles from './Events.module.css';
import Navbar from '../components/navbar';

export default function Events() {
  const [events, setEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {

    setEvents([
      { id: 1, title: "Concierto de Rock", date: "2024-09-10", location: "Madrid" },
      { id: 2, title: "Exposición de Arte", date: "2024-09-12", location: "Barcelona" },
      { id: 3, title: "Feria de Tecnología", date: "2024-09-15", location: "Valencia" },
    ]);
  }, []);

  const handleEventClick = (id) => {
    console.log("llega aca", id)
    router.push(`/detail/${id}`);
  };

  return (
    <Navbar>
    <main className={styles.eventsContainer}>
      <h1 className={styles.eventsTitle}>Eventos</h1>
      <ul className={styles.eventsList}>
        {events.map(event => (
          <li key={event.id} className={styles.eventItem} onClick={() => handleEventClick(event.id)}>
            <h3 className={styles.eventTitle}>{event.title}</h3>
            <p className={styles.eventDate}>Fecha: {event.date}</p>
            <p className={styles.eventLocation}>Ubicación: {event.location}</p>
          </li>
        ))}
      </ul>
    </main>
    </Navbar>
  );
}
