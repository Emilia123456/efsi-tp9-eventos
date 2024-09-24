"use client";

import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const EventContext = createContext();

const EventProvider = (props) => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    console.log('entro')
    const consultarAPI = async () => {
      const url = `http://localhost:3001/api/event`;
      try {
        const respuesta = await axios.get(url);
        console.log('Eventos desde API:', respuesta.data); // Añadir esto para depurar
        setEventos(respuesta.data);
      } catch (error) {
        console.error('Error al traer los eventos', error);
      }
    };
    consultarAPI();
  }, []);

  return (
    <EventContext.Provider value={{ eventos }}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventProvider;
