import React from 'react';
import LoginSignup from './components/User/Login-Signup/Login-Signup';
import LoginSignin from './components/User/Login-Signin/Login-Signin';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import CreatorDashboard from './components/Creator/CreatorDashboard';
import Usernew from './components/Myuser/Usernew';
import { CreatorNew } from './components/MyCreator/CreatorNew';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Welcome/>
    },
    {
      path:'/signup',
      element:<><LoginSignup/></>
    },
    {
      path:'/login',
      element:<><LoginSignin/></>
    },
    {
      path:'/CreatorDashboard',
      element:<><CreatorDashboard/></>
    },
    {
      path:'/Myuser',
      element:<><Usernew/></>
    },
    {
      path:'/MyCreator',
      element:<><CreatorNew/></>
    }



  ])
  return (
    <div >
      
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
