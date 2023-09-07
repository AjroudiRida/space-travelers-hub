import './profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);
  const reservedRockets = rockets.rockets.filter((rocket) => {
    if ('reserved' in rocket && rocket.reserved) {
      return true;
    }

    return false;
  });

  const joinedMissions = missions.missions.filter((mission) => {
    if ('reserved' in mission && mission.reserved) {
      return true;
    }

    return false;
  });

  return (
    <div className="profile-container" data-testid="profile">
      <div className="my-missions">
        <h2 className="missions-title">My Missions</h2>
        {joinedMissions.map((mission) => (
          <div className="mission-item" key={mission.mission_id}>
            {mission.mission_name}
          </div>
        ))}
      </div>
      <div className="my-rockets">
        <h2 className="rockets-title">My Rockets</h2>
        {reservedRockets.map((rocket) => (
          <div className="rocket" key={rocket.id}>
            {rocket.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
