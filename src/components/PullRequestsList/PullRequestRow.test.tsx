import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import PullRequestRow from './PullRequestRow';

const samplePR = {
  title: 'Sample PR Title',
  login: 'mconway',
  count: 5,
};

describe('<PullRequestRow />', () => {
  it('should render', () => {
    render(
      <table>
        <tbody>
          <PullRequestRow {...samplePR} />
        </tbody>
      </table>
    );
    expect(screen.getByText('Sample PR Title')).toBeInTheDocument();
    expect(screen.getByText('mconway')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
