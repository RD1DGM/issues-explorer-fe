import useSWR, { cache, mutate as Mutate, trigger } from "swr";
import { useRouter } from "next/router";
import { useState, useContext } from "react";

import { store } from "../../context";
import useActions from "../../context/actions";
import IssueHeader from "../../components/issues/Header";
import IssueFilters from "../../components/issues/Filters";
import IssueCards from "../../components/issues/Cards";
import Pagination from "../../components/issues/Pagination";
import { getBaseUrl, redirectOnInvalidStates } from "../../utils";
import styles from "../../styles/pages/Issues.module.css";

const filters = ["All Issues", "Open Issues", "Closed Issues", "Pull Request"];

export default function Issues() {
  const [pageIdx, setPageIdx] = useState(0);
  const {
    state: { selectedFilter },
  } = useContext(store);
  const { setSelectedFilter, getValidUrl, setSearchInput } = useActions();
  const router = useRouter();
  const [_, key] = cache.keys();
  const url = getBaseUrl(key);

  const { data: issues, mutate } = useSWR(key);

  const filterIssue = (state = "", issue = true) => {
    mutate(async () => {
      let res;
      if (!issue) {
        res = await fetch(`${key.replace(/issues/g, "pulls")}`);
      } else {
        res = await fetch(`${key}?state=${state}`);
      }
      const newIssues = await res.json();
      return newIssues;
    }, false);
  };

  const addMorePage = async () => {
    setPageIdx(pageIdx + 1);

    await mutate(async (prev) => {
      const res = await fetch(`${key}?page=${pageIdx}`);
      if (!res || !res.ok) return;
      const newData = await res.json();
      return [...prev, ...newData];
    }, false);

    trigger(`${key}?page=${pageIdx}`);
  };

  // redirects to home page when user reloads this page
  redirectOnInvalidStates(router, "/", issues, url);

  return (
    <div className={styles.container}>
      <IssueHeader url={url} />
      <IssueFilters
        props={{
          selectedFilter,
          setSelectedFilter,
          getValidUrl,
          setSearchInput,
          filters,
          filterIssue,
          router,
          cache,
        }}
      />
      <IssueCards issues={issues} />
      <Pagination addMorePage={addMorePage} />
    </div>
  );
}
