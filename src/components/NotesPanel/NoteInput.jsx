import { useState, useRef } from 'react';
import styles from './NoteInput.module.css';

function NoteInput({ onAddNote }) {
    const [content, setContent] = useState('');
    const textareaRef = useRef(null);

    const handleChange = (e) => {
        setContent(e.target.value);

        // Auto-resize textarea
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    };

    const handleSubmit = () => {
        if (content.trim()) {
            onAddNote(content.trim());
            setContent('');

            // Reset textarea height
            if (textareaRef.current) {
                textareaRef.current.style.height = 'auto';
            }
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    const isDisabled = !content.trim();

    return (
        <div className={styles.inputWrapper}>
            <textarea
                ref={textareaRef}
                className={styles.textarea}
                value={content}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter your text here..."
            />
            <button
                className={styles.sendButton}
                onClick={handleSubmit}
                disabled={isDisabled}
            >
                <svg className={styles.sendIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
            </button>
        </div>
    );
}

export default NoteInput;
