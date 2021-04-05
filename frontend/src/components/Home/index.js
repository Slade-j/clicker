// frontend/src/components/Home/index.js
import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";

function Home() {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) return <Redirect to="/photos" />;
  else return <Redirect to='/signup' />;
}

export default Home;
