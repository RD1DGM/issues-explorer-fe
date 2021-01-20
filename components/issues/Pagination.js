import styles from "../../styles/components/Pagination.module.css";

export default function Pagination({ addMorePage }) {
  return (
    <div className={styles.container}>
      <button onClick={() => addMorePage()}>Load more. . . .</button>
    </div>
  );
}
