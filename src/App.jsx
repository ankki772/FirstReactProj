import React from 'react';
import {useRoutes} from "react-router-dom";
import Login from "./login"
import SignupPage from "./SignupPage"
import Welcome from './welcome';
import Management from './management'
import Dashboard from './dashboard';
import Setting from './settings';
import Protected from './common/protected';
// React, JS
function App() {
 
  const ourRoute = useRoutes([
    { path:'/', element:<Welcome/>},
    { path:'/login', element:<Login/>},
    { path:'/signup', element:<SignupPage/>},
    { path:'/dash', element:<Protected page={<Dashboard/>}/>,children:[ { path:'management', element:<Management/>},
    { path:'settings', element:<Setting/>}]
  }
   
  ])
//  HTML
 return ourRoute;
// ----------------------------------------------------
}

export default App;