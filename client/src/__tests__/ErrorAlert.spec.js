import { render, screen } from '@testing-library/react';
import ErrorAlert from '../components/error-alert';

it('should display error message on alert', () => {
  render(<ErrorAlert />);
  const alertMessage = screen.getByText(/Error while fetching phones!/i);

  expect(alertMessage).toBeInTheDocument();
});
