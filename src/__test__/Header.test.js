import { render, screen } from '@testing-library/react';
import Header from '../components/Navigation/Header';
import { Views } from '../enums';
import '@testing-library/jest-dom/extend-expect';

describe('Header component', () => {
  test('renders correct title for Dashboard view', () => {
    const state = { View: { current: Views.Dashboard } };
    render(<Header state={state} />);

    const headingElement = screen.getByText("Welcome, friend!");
    expect(headingElement).toBeInTheDocument();
  });

  test('renders correct title for Budget view', () => {
    const state = { View: { current: Views.Budget } };
    render(<Header state={state} />);

    const headingElement = screen.getByText("Budget");
    expect(headingElement).toBeInTheDocument();
  });

  test('renders correct title for Account view', () => {
    const accountName = 'Test Account';
    const state = {
      View: { current: Views.Account.Transactions }, // Example view from Account
      Account: { current: { accountName } }
    };
    render(<Header state={state} />);

    const headingElement = screen.getByText(accountName);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders correct title for Profile Settings view', () => {
    const state = { View: { current: Views.ProfileView } };
    render(<Header state={state} />);

    const headingElement = screen.getByText("Profile Settings");
    expect(headingElement).toBeInTheDocument();
  });

  test('renders an image with correct alt text', () => {
    const state = { View: { current: Views.Dashboard } };
    render(<Header state={state} />);

    const imageElement = screen.getByAltText("Capstone");
    expect(imageElement).toBeInTheDocument();
  });
});


