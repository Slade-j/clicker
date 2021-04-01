// frontend/src/components/Plaque/index.js
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TopPlaque from "../TopPlaque";
import BottomPlaque from "../BottomPlaque";
import { background, container, gradient } from "./Plaque.module.css"

function Plaque() {
  const history = useHistory();
  const user = useSelector(state => state.session.user);

  if (!user) history.push('/signup');

  return (
    <div className={container}>
      <div className={background}>
        <TopPlaque user={user} />
        <BottomPlaque user={user} />
      </div>
      <div className={gradient}>
      </div>
    </div>
  )
}

export default Plaque;
