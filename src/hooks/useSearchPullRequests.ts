import axios, { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';
import { Comment, PullRequest } from '../types';

const GITHUB_ENDPOINT = 'https://api.github.com/repos';

export const useSearchPullRequests = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<PullRequest[]>([]);
  const sortFn = (a: PullRequest, b: PullRequest) => a?.id - b?.id; // this could be passed as parameter if sort by columns needed
// cache and pagination could all be implemented here 
  const getPullRequests = useCallback(async (repo: string) => {
    const fetchPullRequestComments = (pullRequests: PullRequest[]) => {
      for (const pullRequest of pullRequests) {
        // not using await here as it will be more responsive to have many parallel requests
        // don't show loading here
        axios
          .get(pullRequest.comments_url)
          .then((commentsResponse: AxiosResponse<Comment[]>) => {
            const updatedPR = {
              ...pullRequest,
              commentCount: commentsResponse?.data?.length,
            };
            // key will stay the same so only one with updated count will rerender
            setData((prevData) =>
              [
                ...prevData.filter((pr) => pr.id !== pullRequest.id),
                updatedPR,
              ]?.sort(sortFn)
            );
          })
          .catch((e) => {
            // not sure what to do here , my guess is shouldn't stop the entire list from displaying if just comment count is missing
            console.log(e);
          });
      }
    };

    setLoading(true);
    try {
      const response: AxiosResponse<PullRequest[]> = await axios.get(
        `${GITHUB_ENDPOINT}${repo}/pulls`
      );
      // set the data with count = 0 so at least something renders whilst getting the count
      setData(response?.data?.sort(sortFn));
      // get the comments
      fetchPullRequestComments(response.data);
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    }
    setLoading(false);
  }, []);

  return {
    loading,
    error,
    data,
    getPullRequests,
  };
};
