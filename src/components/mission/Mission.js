import './mission.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../../redux/features/missions/missionsSlice';

const Mission = ({ mission }) => {
  const missionId = mission.mission_id;
  const missionName = mission.mission_name;
  const { description } = mission;

  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="cell cell-1">{missionName}</div>
      <div className="cell cell-2">
        <p>{description}</p>
      </div>
      <div className="cell cell-3">
        {'reserved' in mission && mission.reserved ? (
          <span className="status-active">Active Member</span>
        ) : (
          <span className="status-not-active">Not A Member</span>
        )}
      </div>
      <div className="cell cell-4">
        {'reserved' in mission && mission.reserved ? (
          <button
            type="button"
            className="mission-leave-btn"
            onClick={() => dispatch(leaveMission(missionId))}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            className="mission-btn"
            onClick={() => dispatch(joinMission(missionId))}
          >
            Join Mission
          </button>
        )}
      </div>
    </div>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }),
};

Mission.defaultProps = {
  mission: {
    mission_id: '',
    mission_name: '',
    description: '',
  },
};

export default Mission;
