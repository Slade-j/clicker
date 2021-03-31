// frontend/src/components/Plaque/index.js
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TopPlaque from "../TopPlaque";
import BottomPlaque from "../BottomPlaque";

function Plaque() {
  const history = useHistory();
  const user = useSelector(state => state.session.user);

  if (!user) history.push('/signup');

  return (
    <div className='backgroundPic'>
      <TopPlaque user={user} />
      <BottomPlaque user={user} />
    </div>
  )
}

export default Plaque;
