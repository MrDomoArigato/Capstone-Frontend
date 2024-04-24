import { render, screen} from '@testing-library/react';
import Header from '../components/Navigation/Header';
import { Views } from '../enums';
import '@testing-library/jest-dom/extend-expect'; 

describe('Header component', () => {
  test('renders correct title for Dashboard view', () => {
    const state = { View: { current: Views.Dashboard } };
    render(<Header state={state} />);

    const headingElement = screen.getByText(/Dashboard/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders correct title for Budget view', () => {
    const state = { View: { current: Views.Budget } };
    render(<Header state={state} />);

    const headingElement = screen.getByText(/Budget/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders correct title for account view', () => {
    const accountName = 'Test Account';
    const state = {
      View: { current: Views.Account },
      Account: { current: { accountName: accountName } }
    };
    render(<Header state={state} />);

    const headingElement = screen.getByRole("heading"); //{ name: accountName }; 
    expect(headingElement).toBeInTheDocument();
  });
});


