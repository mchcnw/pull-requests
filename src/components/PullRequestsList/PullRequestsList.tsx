import React, { useMemo } from "react";
import styles from "./PullRequestsList.module.css";
import { PullRequest } from "../../types";
import PullRequestRow from "./PullRequestRow";

type PullRequestsListType = {
  pullRequests: PullRequest[];
};
const PullRequestsList: React.FC<PullRequestsListType> = ({ pullRequests }) => {
  const renderBody = useMemo(() => {
    return pullRequests.map((pr: PullRequest) => (
      <PullRequestRow
        key={`${pr.id}-${pr.commentCount}`}
        title={pr.title}
        login={pr.user.login}
        count={pr.commentCount}
      />
    ));
  }, [pullRequests]);

  return (
    <table
      role="table"
      aria-label="Pull Requests"
      aria-rowcount={pullRequests.length || 0}
    >
      <thead className={styles.header}>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Author</th>
          <th scope="col">Comments</th>
        </tr>
      </thead>
      <tbody>{renderBody}</tbody>
      <tfoot>
        <tr>
          <td colSpan={3}>Footer</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default PullRequestsList;
