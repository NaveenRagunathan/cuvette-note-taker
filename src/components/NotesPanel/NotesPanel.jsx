import styles from './NotesPanel.module.css';
import LandingScreen from './LandingScreen';
import NoteCard from './NoteCard';
import NoteInput from './NoteInput';
import { getInitials } from '../../utils/validation.utils';

function NotesPanel({ selectedGroup, notes, onAddNote, onBack }) {
    if (!selectedGroup) {
        return <LandingScreen />;
    }

    return (
        <div className={styles.notesPanel}>
            <div className={styles.topBar}>
                <button className={styles.backButton} onClick={onBack}>
                    ←
                </button>
                <div className={styles.groupIcon} style={{ backgroundColor: selectedGroup.color }}>
                    {getInitials(selectedGroup.name)}
                </div>
                <div className={styles.groupName}>{selectedGroup.name}</div>
            </div>

            <div className={styles.notesContainer}>
                {notes.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>

            <div className={styles.inputContainer}>
                <NoteInput onAddNote={onAddNote} />
            </div>
        </div>
    );
}

export default NotesPanel;
