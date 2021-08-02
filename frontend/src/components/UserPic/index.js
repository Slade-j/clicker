// frontend/src/components/UserPic/UserPic.js

import { pic, container } from './UserPic.module.css'
import { useSelector } from 'react-redux';

function UserPic() {
  const user = useSelector(state => state.session.user)
  return (
    <div className={container}>
      <img className={pic} src={user.profilePicUrl} />
    </div>
  )
}

export default UserPic;
