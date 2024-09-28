import styles from './Notification.module.css'

export default function Notification({totalFeedback}) {
  if (totalFeedback === 0) {
    return (
      <div>
        <p>No feedback yet</p>
      </div>
    );
  }
}
