import styles from './GroupItem.module.css';
import { getInitials } from '../../utils/validation.utils';

function GroupItem({ group, isSelected, onClick }) {
    return (
        <div
            className={`${styles.groupItem} ${isSelected ? styles.selected : ''}`}
            onClick={onClick}
        >
            <div className={styles.icon} style={{ backgroundColor: group.color }}>
                {getInitials(group.name)}
            </div>
            <div className={styles.name}>{group.name}</div>
        </div>
    );
}

export default GroupItem;
