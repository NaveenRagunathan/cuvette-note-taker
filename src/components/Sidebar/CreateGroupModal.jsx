import { useState, useEffect } from 'react';
import styles from './CreateGroupModal.module.css';
import { validateGroupName, generateGroupId } from '../../utils/validation.utils';

const COLORS = [
    { name: 'Violet', value: '#B38BFA' },
    { name: 'Pink', value: '#FF79F2' },
    { name: 'Turquoise', value: '#43E6FC' },
    { name: 'Orange', value: '#F19576' },
    { name: 'Blue', value: '#0047FF' },
    { name: 'Dark Blue', value: '#6691FF' }
];

function CreateGroupModal({ isOpen, onClose, onCreateGroup, existingGroups }) {
    const [groupName, setGroupName] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (!isOpen) {
            // Reset form when modal closes
            setGroupName('');
            setSelectedColor('');
            setError('');
        }
    }, [isOpen]);

    useEffect(() => {
        // Add escape key listener
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleNameChange = (e) => {
        setGroupName(e.target.value);
        setError('');
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handleCreate = () => {
        const validation = validateGroupName(groupName, existingGroups);

        if (!validation.isValid) {
            setError(validation.error);
            return;
        }

        if (!selectedColor) {
            setError('Please select a color');
            return;
        }

        const newGroup = {
            id: generateGroupId(),
            name: groupName.trim(),
            color: selectedColor
        };

        onCreateGroup(newGroup);
    };

    const isFormValid = groupName.trim().length >= 2 && selectedColor;

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                <h2 className={styles.title}>Create New Group</h2>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Group Name</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={groupName}
                        onChange={handleNameChange}
                        placeholder="Enter group name"
                        autoFocus
                    />
                    {error && <div className={styles.error}>{error}</div>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Choose colour</label>
                    <div className={styles.colorPicker}>
                        {COLORS.map((color) => (
                            <div
                                key={color.value}
                                className={`${styles.colorOption} ${selectedColor === color.value ? styles.selected : ''
                                    }`}
                                style={{ backgroundColor: color.value }}
                                onClick={() => handleColorSelect(color.value)}
                                title={color.name}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.actions}>
                    <button
                        className={styles.createButton}
                        onClick={handleCreate}
                        disabled={!isFormValid}
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateGroupModal;
