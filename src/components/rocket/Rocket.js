import './rocket.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  reserveRocket,
  cancelRocket,
} from '../../redux/features/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  const { id, name, description } = rocket;

  const flickrImages = rocket.flickr_images;
  const dispatch = useDispatch();

  return (
    <div className="rocket-item" data-testid="rocket">
      <div className="rocket-img">
        <img className="img" src={flickrImages[0]} alt="rocket" />
      </div>
      <div className="rocket-text">
        <h2 className="rocket-name">{name}</h2>
        <p className="rocket-description">
          {'reserved' in rocket && rocket.reserved ? (
            <span className="reserved">Reserved</span>
          ) : (
            ''
          )}
          {description}
        </p>

        {'reserved' in rocket && rocket.reserved ? (
          <button
            type="button"
            className="cancel-rocket-reserve"
            onClick={() => dispatch(cancelRocket(id))}
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            type="button"
            className="rocket-reserve-btn"
            onClick={() => dispatch(reserveRocket(id))}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
    reserved: PropTypes.bool,
  }),
};

Rocket.defaultProps = {
  rocket: {
    id: '',
    name: '',
    description: '',
    flickr_images: '',
  },
};

export default Rocket;
