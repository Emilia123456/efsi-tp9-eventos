'use client';

import { useState } from 'react';
import styles from '../PressableEvent.module.css';
import { useRouter } from 'next/navigation'; 

export default function PressableEvent({ event }) {
  const [isPressed, setIsPressed] = useState(false);
  const router = useRouter(); 

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const handleClick = () => {
    router.push(`/detail/${event.id}`);  
  };

  return (
    <div
      className={`${styles.eventItem} ${isPressed ? styles.pressed : ''}`}
      onMouseDown={handlePressIn}
      onMouseUp={handlePressOut}
      onMouseLeave={handlePressOut}
      onTouchStart={handlePressIn}
      onTouchEnd={handlePressOut}
      onClick={handleClick} 
    >
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>{new Date(event.start_date).toLocaleDateString('es-ES')}</p>
    </div>
  );
}
 