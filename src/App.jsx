import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Sidebar from './components/Sidebar/Sidebar';
import NotesPanel from './components/NotesPanel/NotesPanel';
import { loadGroups, saveGroups, loadNotes, saveNotes } from './services/localStorage.service';

function App() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState([]);

  // Load groups from localStorage on mount
  useEffect(() => {
    const savedGroups = loadGroups();
    setGroups(savedGroups);
  }, []);

  // Load notes when selected group changes
  useEffect(() => {
    if (selectedGroup) {
      const groupNotes = loadNotes(selectedGroup.id);
      setNotes(groupNotes);
    } else {
      setNotes([]);
    }
  }, [selectedGroup]);

  const handleCreateGroup = (newGroup) => {
    const updatedGroups = [...groups, newGroup];
    setGroups(updatedGroups);
    saveGroups(updatedGroups);
  };

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
  };

  const handleAddNote = (noteContent) => {
    if (!selectedGroup) return;

    const newNote = {
      id: `note_${Date.now()}`,
      content: noteContent,
      timestamp: new Date().toISOString()
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    saveNotes(selectedGroup.id, updatedNotes);
  };

  const handleBack = () => {
    setSelectedGroup(null);
  };

  return (
    <div className={`${styles.app} ${selectedGroup ? styles.groupSelected : ''}`}>
      <div className={styles.sidebar}>
        <Sidebar
          groups={groups}
          selectedGroup={selectedGroup}
          onSelectGroup={handleSelectGroup}
          onCreateGroup={handleCreateGroup}
        />
      </div>
      <div className={styles.notesPanel}>
        <NotesPanel
          selectedGroup={selectedGroup}
          notes={notes}
          onAddNote={handleAddNote}
          onBack={handleBack}
        />
      </div>
    </div>
  );
}

export default App;
