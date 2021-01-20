import styles from "../../styles/components/IssueCards.module.css";

export default function Cards({ issues }) {
  return (
    <div className={styles.container}>
      {(issues || []).map((issue) => {
        return (
          <div
            key={Math.random(issue.id) * issue.number}
            className={styles.issue_card_body}
          >
            <div className={styles.issue_card_title}>
              <div>{issue.title}</div>
              <img
                src={
                  issue.state === "closed"
                    ? "/icons/issue-close.svg"
                    : !issue.pull_request
                    ? "/icons/pull-request.svg"
                    : ""
                }
              />
            </div>
            <div className={styles.issue_card_body_text}>
              <span
                className={
                  !issue.body ? styles.issue_card_body_no_description : null
                }
              >
                {issue.body.replace(/#|\\r|\\n/g, "") || "No Description"}
              </span>
            </div>
            <div className={styles.issue_card_label}>
              {issue.labels &&
                issue.labels.map((label, id) => {
                  return (
                    <span key={id}>
                      <strong>•</strong>
                      {
                        label.name
                          .replace(/([a-z\d_-]+):/gi, "")
                          .trim()
                          .split(" ")[0]
                      }
                    </span>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
