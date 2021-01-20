import styles from "../../styles/components/IssueFilters.module.css";

function Filters({ props }) {
  const { setSelectedFilter, selectedFilter, filters, filterIssue, cache, router,  getValidUrl, setSearchInput} = props;

  return (
    <div className={styles.container}>
      <div className={styles.issue_filter}>
        {filters.map((filter) => {
          return (
            <span
              key={filter}
              onClick={() => {
                setSelectedFilter(filter);

                switch (filter) {
                  case "All Issues":
                    return filterIssue("all");
                  case "Open Issues":
                    return filterIssue("open");
                  case "Closed Issues":
                    return filterIssue("closed");
                  case "Pull Request":
                    return filterIssue("", false);
                  default:
                    return filterIssue("all");
                }
              }}
              className={
                selectedFilter === filter ? styles.issue_filter_selected : null
              }
            >
              {filter}
            </span>
          );
        })}
      </div>
      <img
        src="/icons/close.svg"
        alt="redirect button"
        onClick={() => {
          cache.clear();
          getValidUrl(false);
          setSearchInput("");
          router.push("/");
        }}
      />
    </div>
  );
}

export default Filters;
