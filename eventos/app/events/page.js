"use client";

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Events.module.css';
import EventList from '../components/EventList/EventList';
import Navbar from '../components/Navbar/Navbar';
import { EventContext } from '../context/EventContext';

export default function Events() {
  const { eventos } = useContext(EventContext);
  const router = useRouter();

  const handleEventClick = (id) => {
    router.push(`/detail/${id}`);
  };

  useEffect(() => {
    console.log("Eventos en Events.js:", eventos);
  }, [eventos]);

  return (
    <Navbar>
      <main className={styles.eventsContainer}>
        <h1 className={styles.eventsTitle}>Eventos</h1>
        {eventos.length === 0 ? (
          <p>Cargando eventos...</p>
        ) : (
          <EventList events={eventos} onEventClick={handleEventClick} />
        )}
      </main>
    </Navbar>
  );
}
