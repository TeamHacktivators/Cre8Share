import React from 'react';
import LoginSignup from './components/User/Login-Signup/Login-Signup';
import LoginSignin from './components/User/Login-Signin/Login-Signin';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import UserDashboard from './components/User/UserDashboard/UserDashboard';

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
      path:'/UserDashboard',
      element:<><UserDashboard/></>
    }

  ])
  return (
    <div >
      
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
