// frontend/src/App.js

// ************* App without Modal ***************************************
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormPage";
// import SignupFormPage from "./components/SignupFormPage";
// import * as sessionActions from "./store/session";
// import Navigation from "./components/Navigation";

// function App() {
//   const dispatch = useDispatch();
//   const [isLoaded, setIsLoaded] = useState(false);
//   useEffect(() => {
//     dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
//   }, [dispatch]);

//   return (
//     <>
//       <Navigation isLoaded={isLoaded} />
//       {isLoaded && (
//         <Switch>
//           <Route path="/login">
//             <LoginFormPage />
//           </Route>
//           <Route path="/signup">
//             <SignupFormPage />
//           </Route>
//         </Switch>
//       )}
//     </>
//   );
// }

// export default App;

// ************* App with Modal ******************************************
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import TopNav from "./components/TopNav";
import { nav, wrapper, left, right } from './components/TopNav/TopNav.module.css';
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import LinkList from './components/LinkList';
import UserPic from './components/UserPic';
import Plaque from "./components/Plaque";
import './index.css';
import DropPhoto from "./components/DropPhoto";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route path="/signup">
          <Navigation isLoaded={isLoaded} />
            {isLoaded && (
              <SignupFormPage />
              )}
        </Route>
        <Route path='/photos'>
          {isLoaded && ([
            <TopNav key='topNav' selectors={ { nav, wrapper, left, right } }
            components={ {First: Logo, Second: LinkList, Third: SearchBar, Fourth: UserPic}}
            navArray={['/photos', 'You', '/link/test', 'test1', '/login', 'test2']}
            />,
            <Plaque key='plaque' />
            ])}
        </Route>
        <Route path='/add-photos'>
            <DropPhoto />
        </Route>
      </Switch>
    </>
  );
}

export default App;
