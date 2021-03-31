// frontend/src/components/Joined/index.js
import { useSelector } from 'react-redux';

function Joined() {
  const user = useSelector(state => state.session.user);
  const year = user.createdAt.split('-').shift();
  return (
    <div className='main-container'>
      <span className='joined'>{`Joined ${year}`}</span>
    </div>
  )
}

export default Joined;
