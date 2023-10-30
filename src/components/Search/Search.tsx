import React, { useRef } from "react";
import styles from "./Search.module.css";

type SearchProps = {
  searchUpdate: (repoPath: string) => void;
};
const Search: React.FC<SearchProps> = ({ searchUpdate }) => {
  // use uncontrolled components
  const repo = useRef<string>("");
  const urlInput = useRef<string>("");

  const updateRepoPathValue = (url: string) => {
    const modifiedUrl = url.replace(/^https:\/\/github\.com|\/pulls$/g, "");
    repo.current = modifiedUrl;
    urlInput.current = url;
  };

  const search = () => {
    if (repo?.current) {
    // validate it is in right format here 
      searchUpdate(repo?.current);
    }
  };

  return (
    <div role="search" className={styles.searchBar}>
      <label htmlFor="search-input">GitHub Url</label>
      <input
        id="search-input"
        aria-label="search-input"
        placeholder="https://github.com/org/repo/pulls"
        defaultValue={urlInput.current}
        type="text"
        onChange={(e) => updateRepoPathValue(e.target.value)}
        autoComplete="false"
      />
      <button aria-label="search-button" type="submit" onClick={search}>
        Search
      </button>
    </div>
  );
};

export default Search;
