/**
 * Format a date object to "16 March 2023 • 10:10 AM" format
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
export const formatTimestamp = (date) => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;

    return `${day} ${month} ${year} • ${hours}:${minutesStr} ${ampm}`;
};

/**
 * Get current timestamp
 * @returns {Date} Current date object
 */
export const getCurrentTimestamp = () => {
    return new Date();
};
