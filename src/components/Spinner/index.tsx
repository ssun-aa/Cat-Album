import styles from './spinner.module.scss';

function Spinner() {
  return (
    <div className={styles.loading}>
      <div />
      <div />
    </div>
  );
}

export default Spinner;
