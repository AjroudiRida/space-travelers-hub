import './missions.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../../redux/features/missions/missionsSlice';
import Mission from '../mission/Mission';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getMissions('missions'));
  }, [dispatch]);

  return (
    <div className="missions-list-table" data-testid="missions">
      <div className="table-header">
        <div className="th th-1">Mission</div>
        <div className="th th-2">Description</div>
        <div className="th th-3">Status</div>
        <div className="th th-4" />
      </div>
      <div className="table-body">
        {missions.missions.map((mission) => (
          <Mission key={mission.mission_id} mission={mission} />
        ))}
      </div>
    </div>
  );
};

export default Missions;
