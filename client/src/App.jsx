import React from 'react';
import LoginSignup from './components/User/Login-Signup/Login-Signup';
import LoginSignin from './components/User/Login-Signin/Login-Signin';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import UserDashboard from './components/User/UserDashboard/UserDashboard';
import CreatorDashboard from './components/Creator/CreatorDashboard';
import Usernew from './components/Myuser/Usernew';
import {CreatorNew} from './components/MyCreator/CreatorNew';
import StockListPage from './components/StockList/StockList';

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
    },
    {
      path:'/Myuser/StockListPage',
      element:<><StockListPage/></>
    }


  ])
  return (
    <div >
      
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
