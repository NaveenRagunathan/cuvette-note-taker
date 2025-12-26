/**
 * Validate group name
 * @param {string} name - Group name to validate
 * @param {Array} existingGroups - Array of existing groups
 * @returns {Object} { isValid: boolean, error: string }
 */
export const validateGroupName = (name, existingGroups) => {
    // Check if name is empty or only whitespace
    if (!name || name.trim().length === 0) {
        return { isValid: false, error: 'Group name cannot be empty' };
    }

    // Check minimum 2 characters
    if (name.trim().length < 2) {
        return { isValid: false, error: 'Group name must be at least 2 characters' };
    }

    // Check for duplicate names (case-insensitive)
    const nameLower = name.trim().toLowerCase();
    const isDuplicate = existingGroups.some(
        group => group.name.toLowerCase() === nameLower
    );

    if (isDuplicate) {
        return { isValid: false, error: 'Group name already exists' };
    }

    return { isValid: true, error: '' };
};

/**
 * Generate unique group ID
 * @returns {string} Unique ID
 */
export const generateGroupId = () => {
    return `group_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Get initials from group name
 * - If single word: use first 2 letters
 * - If multiple words: use first letter of each of the first 2 words
 * @param {string} name - Group name
 * @returns {string} Initials (uppercase)
 */
export const getInitials = (name) => {
    const trimmed = name.trim();
    if (trimmed.length === 0) return '';

    // Split by spaces to check for multiple words
    const words = trimmed.split(/\s+/).filter(word => word.length > 0);

    if (words.length === 1) {
        // Single word: take first 2 letters
        const word = words[0];
        if (word.length === 1) return word[0].toUpperCase();
        return word.substring(0, 2).toUpperCase();
    } else {
        // Multiple words: take first letter of first 2 words
        const firstLetter = words[0][0].toUpperCase();
        const secondLetter = words[1][0].toUpperCase();
        return firstLetter + secondLetter;
    }
};
