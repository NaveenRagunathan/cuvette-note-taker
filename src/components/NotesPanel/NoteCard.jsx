import styles from './NoteCard.module.css';
import { formatTimestamp } from '../../utils/date.utils';

function NoteCard({ note }) {
    const timestamp = new Date(note.timestamp);

    return (
        <div className={styles.noteCard}>
            <div className={styles.content}>{note.content}</div>
            <div className={styles.timestamp}>{formatTimestamp(timestamp)}</div>
        </div>
    );
}

export default NoteCard;
