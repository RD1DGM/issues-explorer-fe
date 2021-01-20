export const fetcher = async (url, accessToken = "") => {
  const res = await fetch(url, {
    headers: {
      Authorization: accessToken, // use github personal access token to increase rate-limit
      "Content-Type": "application/vnd.github.v3+json",
    },
  });

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const data = await res.json();
  return data;
};

export const validateUrl = (url) => {
  if (!url || !url.includes("github.com")) return;

  const [org, repo] = url.slice(url.indexOf("com") + 4).split("/");

  return org && repo && `/${org}/${repo}`;
};

export const getBaseUrl = (url) => {
  if (!url || !url.includes("api.github.com")) return;

  return url.replace(/api.|repos\/|\/issues/g, "");
};

export const redirectOnInvalidStates = (router, path = "", ...states) => {
  if (typeof path !== "string") throw new Error("Path should be a String type");

  return (
    typeof window !== "undefined" &&
    [...states].every((s) => !s) &&
    router.push(path)
  );
};
