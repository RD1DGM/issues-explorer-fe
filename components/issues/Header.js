import styles from "../../styles/components/IssueHeader.module.css"

export default function Header({ url }) {
    return (
        <div className={styles.container}>
            <p>GitHub Issue Viewer</p>
            <p>{url}</p>
        </div>
    )
}
