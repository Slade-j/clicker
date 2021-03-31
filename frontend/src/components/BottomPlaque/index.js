// frontend/src/components/BottomPlaque/index.js
import UserPic from '../UserPic';


function BottomPlaque({ user }) {
  const fullName = `${user.firstName} ${user.lastName}`
  return (
    <div className='main-container'>
      <div className='centering-div'>
        <UserPic />
        <div className='flex-coloumn'>
          <div className='Name-div'>
            <h2 className='userName'>{fullName}</h2>
          <div className='flex-row'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomPlaque;
