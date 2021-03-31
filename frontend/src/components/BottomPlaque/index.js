// frontend/src/components/BottomPlaque/index.js
import UserPic from '../UserPic';
import TopNav from '../TopNav';
import LinkList from '../LinkList';
import UserName from '../UserName';
import PhotoCount from '../PhotoCount';
import Joined from '../Joined';
import { nav, wrapper, left, right } from './BottomPlaque.module.css';


function BottomPlaque({ user }) {
  const following = 5;
  const followers = 255;

  const fullName = `${user.firstName} ${user.lastName}`
  return (
    <div className='main-container'>
      <div className='centering-div'>
        <UserPic />
        <div className='flex-coloumn'>
          <div className='Name-div'>
            <h2 className='userName'>{fullName}</h2>
          <div className='flex-row'>
            <TopNav
              selectors={{nav, wrapper, left, right}}
              components={{First: UserName, Second: LinkList, Third: PhotoCount, Fourth: Joined}}
              navArray={['/photos', `${followers} Followers`, '/photos', `${following} Following`]}
              />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomPlaque;
