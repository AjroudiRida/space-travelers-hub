import './profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions);

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
      </div>
    </div>
  );
};

export default Profile;
