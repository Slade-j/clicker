// frontend/src/components/UserName/index.js
import { useSelector } from 'react-redux';

function UserName() {
  const user = useSelector(state => state.session.user);

  return (
    <div className='main-container'>
      <div className='span'>
        <span className='name'>
          {user.userName ? user.userName: user.email}
        </span>
      </div>
    </div>
  )
}

export default UserName;
