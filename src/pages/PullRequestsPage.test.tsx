import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import PullRequestsPage from './PullRequestsPage';
import * as hooks from '../hooks/useSearchPullRequests'

jest.mock('../hooks/useSearchPullRequests'); // Mock the useSearchPullRequests hook
const mockUseSearchPullRequests = jest.spyOn(hooks, 'useSearchPullRequests');

describe('<PullRequestsPage />', () => {
   
      it('should display PRs', async() => {
        const mockData = [
            { id: 1, title: 'PR 1 Title', user: { login: 'user1' }, commentCount: 5 },
            { id: 2, title: 'PR 2 Title', user: { login: 'user2' }, commentCount: 3 },
          ];
        
          (mockUseSearchPullRequests as jest.Mock).mockReturnValue({
            loading: false,
            error: null,
            data: mockData,
            getPullRequests: jest.fn(),
          });

          render(<PullRequestsPage />);
          await waitFor(() => {
            expect(screen.getByText('PR 1 Title')).toBeInTheDocument();
            expect(screen.getByText('user1')).toBeInTheDocument();
            expect(screen.getByText('5')).toBeInTheDocument();
            expect(screen.getByText('PR 2 Title')).toBeInTheDocument();
            expect(screen.getByText('user2')).toBeInTheDocument();
            expect(screen.getByText('3')).toBeInTheDocument();
          });
        
          expect(screen.queryByText('Loading...')).toBeNull();
          expect(screen.queryByText('Error')).toBeNull();
      });

      it('should display error', () => {
        (mockUseSearchPullRequests as jest.Mock).mockReturnValue({
            loading: false,
            error: 'Error message',
            data: [],
            getPullRequests: jest.fn(),
          });

          render(<PullRequestsPage />);

          // Check if the error message is displayed
          expect(screen.getByText('Error has occurred Error message')).toBeInTheDocument();
      });

      it('should display loading', () => {
        (mockUseSearchPullRequests as jest.Mock).mockReturnValue({
            loading: true,
            error: null,
            data: [],
            getPullRequests: jest.fn(),
          });

          render(<PullRequestsPage />);

          // Check if the error message is displayed
          expect(screen.getByText('...Loading')).toBeInTheDocument();
      })
});




