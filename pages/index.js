import { useContext } from "react";
import Router from "next/router";
import useSWR from "swr";

import { store } from "../context";
import { validateUrl } from "../utils/";
import useActions from "../context/actions";
import SearchForm from "../components/search/Form";
import SearchHeader from "../components/search/Header";
import ErrorModal from "../components/error/Modal.js";
import Loader from "../components/Loader";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  const githubReposApi = process.env.NEXT_PUBLIC_GITHUB_REPOS_API;

  const { state } = useContext(store);
  const { ...actions } = useActions();
  const { isValidUrl, searchInput, hasInputError, isLoading } = state;

  const { data: issues, error } = useSWR(
    isValidUrl && `${githubReposApi}${validateUrl(searchInput)}/issues`
  );

  if (issues) Router.push("/issues");
  if (issues && issues.length === 0) Router.push("/issues/noIssues");
  if (error) Router.push("/issues/404");

  return (
    <div className={styles.container}>
      {isLoading && !issues && searchInput && <Loader loading={isLoading} />}
      {hasInputError && (
        <ErrorModal props={{ hasInputError, ...actions, Router }} />
      )}
      <SearchHeader />
      <SearchForm
        props={{
          ...actions,
          searchInput,
          validateUrl,
        }}
      />
    </div>
  );
}
