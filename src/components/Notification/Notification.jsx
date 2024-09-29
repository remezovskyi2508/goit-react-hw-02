import styles from './Notification.module.css'

export default function Notification({totalFeedback}) {
    return totalFeedback === 0 && (
      <div className={styles.container}>
        <p>No feedback yet</p>
      </div>
    );
}
