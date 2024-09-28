import styles from './Feedback.module.css';

export default function Feedback({ values, totalFeedback, positiveFeedback }) {
  if (totalFeedback > 0) {
    return (
      <div>
        <ul className={styles.opinionList}>
          <li>Good: {values.good}</li>
          <li>Neutral: {values.neutral}</li>
          <li>Bad: {values.bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedback}</li>
        </ul>
      </div>
    );
  }
}
