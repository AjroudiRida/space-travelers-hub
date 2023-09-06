import './mission.css';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => {
  const missionName = mission.mission_name;
  const { description } = mission;

  return (
    <div className="row">
      <div className="cell cell-1">{missionName}</div>
      <div className="cell cell-2">
        <p>{description}</p>
      </div>
      <div className="cell cell-3">
        <span className="status-not-active">Not A Member</span>
      </div>
      <div className="cell cell-4">
        <button type="button" className="mission-btn">
          Join Mission
        </button>
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
