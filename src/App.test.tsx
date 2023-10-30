import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should render', () => {
    render(<App />);
    const header = screen.getByText('Demo App');
    expect(header).toBeTruthy()
  });


})