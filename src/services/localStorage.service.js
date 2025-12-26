const GROUPS_KEY = 'pocket-notes-groups';
const NOTES_PREFIX = 'pocket-notes-notes-';

/**
 * Save groups to localStorage
 * @param {Array} groups - Array of group objects
 */
export const saveGroups = (groups) => {
    try {
        localStorage.setItem(GROUPS_KEY, JSON.stringify(groups));
    } catch (error) {
        console.error('Error saving groups to localStorage:', error);
    }
};

/**
 * Load groups from localStorage
 * @returns {Array} Array of group objects
 */
export const loadGroups = () => {
    try {
        const groupsJson = localStorage.getItem(GROUPS_KEY);
        return groupsJson ? JSON.parse(groupsJson) : [];
    } catch (error) {
        console.error('Error loading groups from localStorage:', error);
        return [];
    }
};

/**
 * Save notes for a specific group
 * @param {string} groupId - Group ID
 * @param {Array} notes - Array of note objects
 */
export const saveNotes = (groupId, notes) => {
    try {
        const key = `${NOTES_PREFIX}${groupId}`;
        localStorage.setItem(key, JSON.stringify(notes));
    } catch (error) {
        console.error('Error saving notes to localStorage:', error);
    }
};

/**
 * Load notes for a specific group
 * @param {string} groupId - Group ID
 * @returns {Array} Array of note objects
 */
export const loadNotes = (groupId) => {
    try {
        const key = `${NOTES_PREFIX}${groupId}`;
        const notesJson = localStorage.getItem(key);
        return notesJson ? JSON.parse(notesJson) : [];
    } catch (error) {
        console.error('Error loading notes from localStorage:', error);
        return [];
    }
};

/**
 * Clear all data from localStorage (for testing)
 */
export const clearAll = () => {
    try {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith('pocket-notes-')) {
                localStorage.removeItem(key);
            }
        });
    } catch (error) {
        console.error('Error clearing localStorage:', error);
    }
};
