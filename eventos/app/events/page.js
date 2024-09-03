// pages/events.js
"use client"; // Esto indica que este componente es un Client Component

import { useState, useEffect } from 'react';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulación de carga de datos de eventos
    setEvents([
      { id: 1, title: "Concierto de Rock", date: "2024-09-10", location: "Madrid" },
      { id: 2, title: "Exposición de Arte", date: "2024-09-12", location: "Barcelona" },
      { id: 3, title: "Feria de Tecnología", date: "2024-09-15", location: "Valencia" },
      // Agrega más eventos aquí
    ]);
  }, []);

  return (
    <main>
      <h1>Eventos</h1>
      <ul >
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>Fecha: {event.date}</p>
            <p>Ubicación: {event.location}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
