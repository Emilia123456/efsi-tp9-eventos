'use client'

import { useState } from 'react'
import styles from '../PressableEvent.module.css'

export default function PressableEvent({ event, onPress }) {
  const [isPressed, setIsPressed] = useState(false)

  const handlePressIn = () => {
    setIsPressed(true)
  }

  const handlePressOut = () => {
    setIsPressed(false)
  }

  const handleClick = () => {
    onPress(router.push('/detail/'event.id);)//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  }  

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
      <p>{event.start_date}</p>
    </div>
  )
}