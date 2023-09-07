import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rocketsReducer from '../../../redux/features/rockets/rocketsSlice';
import Rockets from '../Rockets';

const testStore = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

const mockRockets = [
  {
    id: 'rocket1',
    name: 'Rocket 1',
    description: 'Description 1',
    flickr_images: ['image1.jpg'],
  },
  {
    id: 'rocket2',
    name: 'Rocket 2',
    description: 'Description 2',
    flickr_images: ['image2.jpg'],
  },
];

describe('Rockets component', () => {
  it('renders a list of rockets', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockRockets,
    });

    render(
      <Provider store={testStore}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
      </Provider>,
    );

    await waitFor(() => expect(screen.getByText('Rocket 1')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Rocket 2')).toBeInTheDocument());
  });

  it('should display a reserved tag when reserve button is clicked', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockRockets,
    });

    render(
      <Provider store={testStore}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
      </Provider>,
    );

    const buttonElement = await waitFor(() => screen.getAllByText('Reserve Rocket'));
    fireEvent.click(buttonElement[0]);
    const reservedTagElement = await waitFor(() => screen.getByText('Reserved'));

    expect(reservedTagElement).toBeInTheDocument();
  });

  it('should hide the reserved tag when cancel reservation button is clicked', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockRockets,
    });

    render(
      <Provider store={testStore}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
      </Provider>,
    );

    const reserveButton = await waitFor(() => screen.getAllByText('Reserve Rocket'));
    fireEvent.click(reserveButton[0]);
    const cancelButton = await waitFor(() => screen.getByText('Cancel Reservation'));

    fireEvent.click(cancelButton);

    expect(screen.queryByText('Reserved')).not.toBeInTheDocument();
  });
});
