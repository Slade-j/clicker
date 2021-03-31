// frontend/src/components/UserPic/UserPic.js

import { pic, container } from './UserPic.module.css'

function UserPic() {
  return (
    <div className={container}>
      <div className={pic}></div>
    </div>
  )
}

export default UserPic;
