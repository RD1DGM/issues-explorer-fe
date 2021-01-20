import styles from "../styles/components/Loader.module.css";

/*
- loading css effect animation based on "fake" network lag
- could be implemented better based on network response (delay/lag/etc.)
*/
export default function Loader({ loading }) {
  return (
    <div className={loading ? styles.loading_effect : styles.not_loading} />
  );
}
