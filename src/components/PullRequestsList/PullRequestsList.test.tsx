import { render, screen } from "@testing-library/react";
import PullRequestsList from "./PullRequestsList";
import '@testing-library/jest-dom';

const samplePullRequests = [
  {
    id: 1,
    title: 'PR 1 Title',
    user: { id: 11, login: 'user1' },
    comments_url: 'https://',
    commentCount: 5,
    body: '',
  },
  {
    id: 2,
    title: 'PR 2 Title',
    user: { id: 10, login: 'user2' },
    comments_url: 'https://',
    commentCount: 3,
    body: '',
  },
];

describe('<PullRequestsList />', () => {
  it('should render', () => {
    render(<PullRequestsList pullRequests={samplePullRequests} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Author')).toBeInTheDocument();
    expect(screen.getByText('Comments')).toBeInTheDocument();

    // Check if the PR data is rendered in the table body
    expect(screen.getByText('PR 1 Title')).toBeInTheDocument();
    expect(screen.getByText('user1')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('PR 2 Title')).toBeInTheDocument();
    expect(screen.getByText('user2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
