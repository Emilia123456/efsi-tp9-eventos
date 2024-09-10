import styles from '../EventList.module.css';


const EventList = ({ events, onEventClick }) => (
    <ul className={styles.eventsList}>
      {events.map(event => (
        <li key={event.id} className={styles.eventItem} onClick={() => onEventClick(event.id)}>
          <h3 className={styles.eventTitle}>{event.title}</h3>
          <p className={styles.eventDate}>Fecha: {event.date}</p>
          <p className={styles.eventLocation}>Ubicación: {event.location}</p>
        </li>
      ))}
    </ul>
  );
  
  export default EventList;
  