import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Profile from '../Profile';
import store from '../../../redux/store';

describe('profile testing', () => {
  it('should be in the document', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    const profileElement = screen.getByTestId('profile');
    expect(profileElement).toBeInTheDocument();
  });

  it('should be visible in the document', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    const profileElement = screen.getByTestId('profile');
    expect(profileElement).toBeVisible();
  });
});
