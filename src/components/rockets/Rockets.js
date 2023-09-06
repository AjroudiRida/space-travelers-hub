import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from '../rocket/Rocket';
import { getRockets } from '../../redux/features/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsState = useSelector(
    (state) => state.rockets,
  );
  useEffect(() => {
    dispatch(getRockets('rockets'));
  }, [dispatch]);

  return (
    <>
      {rocketsState.rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </>
  );
};

export default Rockets;
