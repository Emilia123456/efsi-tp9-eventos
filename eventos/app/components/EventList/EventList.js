import PressableEvent from '../PressableEvent/PressableEvent';
import styles from '../EventList.module.css';

export default function EventList({ events, onEventClick }) {
  return (
    <div className={styles.eventList}>
      {events.map((event) => (
        <PressableEvent
          key={event.id}
          event={event}
          onPress={() => onEventClick(event.id)} 
        />
      ))}
    </div>
  );
}
