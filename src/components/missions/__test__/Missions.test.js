import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import missionsReducer from '../../../redux/features/missions/missionsSlice';
import Missions from '../Missions';

const testStore = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

const mockMissions = [
  {
    mission_id: '1',
    mission_name: 'Thaicom',
    description: 'mission 1',
  },
  {
    mission_id: '2',
    mission_name: 'Telstar',
    description: 'mission 2',
  },
];

describe('missions testing', () => {
  it('should render list of missions', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockMissions,
    });

    render(
      <Provider store={testStore}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
      </Provider>,
    );

    await waitFor(() => expect(screen.getByText('Thaicom')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Telstar')).toBeInTheDocument());
  });

  it('should display an active member tag when join mission is clicked', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockMissions,
    });

    render(
      <Provider store={testStore}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
      </Provider>,
    );

    const joinMissionButton = await waitFor(() => screen.getAllByText('Join Mission'));
    fireEvent.click(joinMissionButton[0]);
    const activeMemberTag = await waitFor(() => screen.getByText(/active member/i));

    expect(activeMemberTag).toBeInTheDocument();
  });

  it('should display a not a member tag when leave mission is clicked', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockMissions,
    });

    render(
      <Provider store={testStore}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
      </Provider>,
    );

    const joinMissionButton = await waitFor(() => screen.getAllByText('Join Mission'));
    fireEvent.click(joinMissionButton[0]);

    const leaveMissionButton = await waitFor(() => screen.getAllByText(/Leave Mission/i));

    fireEvent.click(leaveMissionButton[0]);

    expect(screen.queryByText(/active member/i)).not.toBeInTheDocument();
  });
});
