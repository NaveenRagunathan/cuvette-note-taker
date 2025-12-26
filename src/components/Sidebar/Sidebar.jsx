import { useState } from 'react';
import styles from './Sidebar.module.css';
import GroupItem from './GroupItem';
import CreateGroupModal from './CreateGroupModal';

function Sidebar({ groups, selectedGroup, onSelectGroup, onCreateGroup }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleCreate = (newGroup) => {
        onCreateGroup(newGroup);
        handleCloseModal();
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.header}>Pocket Notes</div>
            <div className={styles.groupList}>
                {groups.map((group) => (
                    <GroupItem
                        key={group.id}
                        group={group}
                        isSelected={selectedGroup?.id === group.id}
                        onClick={() => onSelectGroup(group)}
                    />
                ))}
            </div>
            <button className={styles.createButton} onClick={handleOpenModal}>
                +
            </button>
            <CreateGroupModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onCreateGroup={handleCreate}
                existingGroups={groups}
            />
        </div>
    );
}

export default Sidebar;
