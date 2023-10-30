import { render, fireEvent } from '@testing-library/react';
import Search from './Search';
import '@testing-library/jest-dom';

describe('<Search />', () => {
    it('should render', () => {
        const { getByLabelText, getByPlaceholderText, getByText } = render(<Search searchUpdate={jest.fn()} />);

        expect(getByLabelText('GitHub Url')).toBeInTheDocument();
        expect(getByPlaceholderText('https://github.com/org/repo/pulls')).toBeInTheDocument();
        expect(getByText('Search')).toBeInTheDocument();
    });

    it('should format the input', () => {
        const searchUpdateMock = jest.fn();
        const { getByPlaceholderText, getByText } = render(<Search searchUpdate={searchUpdateMock} />);
        const input = getByPlaceholderText('https://github.com/org/repo/pulls');
        const searchButton = getByText('Search');
        fireEvent.change(input, { target: { value: 'https://github.com/org/repo/pulls' } });
        fireEvent.click(searchButton);
        expect(searchUpdateMock).toHaveBeenCalledWith('/org/repo');
      });
})