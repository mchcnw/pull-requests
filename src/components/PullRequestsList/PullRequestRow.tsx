import React, { memo } from "react";

type PullRequestRowType = {
  title: string;
  login: string;
  count: number;
};
const PullRequestRow: React.FC<PullRequestRowType> = ({
  title,
  login,
  count,
}) => (
  <tr>
    <td data-label='Name'>{title}</td>
    <td data-label='Author'>{login}</td>
    <td data-label='Comments'>{count}</td>
  </tr>
);

export default memo(PullRequestRow);
