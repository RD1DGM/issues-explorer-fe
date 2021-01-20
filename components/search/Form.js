import styles from "../../styles/components/SearchForm.module.css";

export default function Form({ props }) {
  const {
    setSearchInput,
    searchInput,
    validateUrl,
    getValidUrl,
    getInputError,
    setLoading,
  } = props;

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.container}>
      <input
        className={styles.search_bar}
        type="text"
        placeholder="Paste a link to a GitHub repo!"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        className={styles.search_button}
        type="submit"
        value="click me"
        onClick={(e) => {
          e.preventDefault();
          if (!searchInput) return;
          
          setLoading(true);
          // adding "fake" network lag
          setTimeout(() => {
            validateUrl(searchInput)
              ? getValidUrl(true)
              : getInputError(`Please provide a valid Github repository URL.`);
            setLoading(false);
          }, 600);
        }}
      >
        <img src="/icons/search.svg" alt="search button" />
      </button>
    </form>
  );
}
