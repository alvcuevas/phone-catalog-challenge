import { render, screen, fireEvent } from '@testing-library/react';
import NavigationBar from '../components/navigation-bar';

it('should display app title', () => {
    render(<NavigationBar/>);
    const appTitle = screen.getByText(/Phone Catalog Challenge/i);

    expect(appTitle).toBeInTheDocument();
});

it('should display dark theme button', () => {
    render(<NavigationBar/>);
    const themeTitle = screen.getByText(/Theme/i);

    expect(themeTitle).toBeInTheDocument();
});

it('should change app theme by calling his function', () => {
    const mockHandleTheme = jest.fn();
    render(<NavigationBar handleTheme={mockHandleTheme} />);

    const changeThemeBtn = screen.getByText(/Theme/i);
    fireEvent.click(changeThemeBtn);

    expect(mockHandleTheme).toHaveBeenCalled();
    expect(mockHandleTheme).toHaveBeenCalledTimes(1);
});
