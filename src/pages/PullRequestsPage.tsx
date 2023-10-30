import { useMemo } from "react";
import ErrorMessage from "../components/shared/ErrorMessage";
import Loading from "../components/shared/Loading";
import PullRequestsList from "../components/PullRequestsList/PullRequestsList";
import Search from "../components/Search/Search";
import { useSearchPullRequests } from "../hooks/useSearchPullRequests";
import styles from './PullRequestsPage.module.css'

const PullRequestsPage = () => {
    const { loading, error, data = [], getPullRequests } = useSearchPullRequests();
   // no need for useCallback here
    const searchUpdate = (repo: string) => {
        getPullRequests(repo);
    };
    // doubt any gain from useMemo here, usually I would profile to be sure
    const hasError = useMemo(() => Boolean(error), [error]);
    const displayResults = useMemo(() => Boolean(!loading && !hasError && data.length > 0), [loading, hasError, data]);
    const noResults = useMemo(() => Boolean(!loading && !hasError && data.length === 0), [loading, hasError, data]);
    return (
        <div className={styles.container}>
            <h2>Pull Requests</h2>
            <Search searchUpdate={searchUpdate} />
            {loading && (<Loading />)}
            {error && (<ErrorMessage errorMessage={error} />)}
            {displayResults && (
            <PullRequestsList pullRequests={data} />
            )}
            {noResults && (
                <p>No Pull Requests found</p>
            )}
        </div>
    
    )
}

export default PullRequestsPage;