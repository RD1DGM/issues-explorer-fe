import styles from "../../styles/components/ErrorModal.module.css";

export default function Modal({ props }) {
  const {
    hasInputError: error,
    getInputError: setInputError,
    setSearchInput,
    Router: router,
  } = props;

  const closeModal = () => {
    setInputError("");
    setSearchInput("");
    router.push("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.background} onClick={() => closeModal()} />
      <div className={styles.modal_card}>
        <div className={styles.modal_card_header}>
          <img src="/icons/warning.svg" alt="warning logo" height="50" />
        </div>
        <div className={styles.modal_card_body}>
          <p>Warning!</p>
          <p>{error}</p>
          <button onClick={() => closeModal()}>Close</button>
        </div>
      </div>
    </div>
  );
}
