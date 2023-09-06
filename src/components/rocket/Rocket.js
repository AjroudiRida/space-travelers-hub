import './rocket.css';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const flickrImages = rocket.flickr_images;
  const { name, description } = rocket;
  return (
    <div className="rocket-item" data-testid="rocket">
      <div className="rocket-img">
        <img className="img" src={flickrImages[0]} alt="rocket" />
      </div>
      <div className="rocket-text">
        <h2 className="rocket-name">{name}</h2>
        <p className="rocket-description">

          {description}
        </p>
        <button
          type="button"
          className="rocket-reserve-btn"
        >
          Reserve Rocket
        </button>

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
