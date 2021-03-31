// frontend/src/components/Plaque/index.js
import * as sessionActions from "../../store/session";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import TopPlaque from "../TopPlaque";
import BottomPlaque from "../BottomPlaque";

function Plaque() {
  const history = useHistory();
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    sessionActions.restoreUser();
    if (!user) history.push('/signup')
  }, [user])

  return (
    <div className='backgroundPic'>
      <TopPlaque user={user} />
      <BottomPlaque user={user} />
    </div>
  )
}
