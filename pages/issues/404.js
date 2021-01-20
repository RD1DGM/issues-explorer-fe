import { useRouter } from "next/router";
import { cache } from "swr";

import useActions from "../../context/actions";
import styles from "../../styles/pages/Issues404.module.css";

export default function Error() {
  const router = useRouter();
  const { getValidUrl, setSearchInput } = useActions();
  return (
    <div className={styles.container}>
      <div>
        <h1>404 Error</h1>
        <p>This path doesn't exist.</p>
      </div>
      <div className={styles.divider}></div>
      <button
        onClick={() => {
          cache.clear();
          getValidUrl(false);
          setSearchInput("");
          router.push("/");
        }}
      >
        Return
      </button>
    </div>
  );
}
