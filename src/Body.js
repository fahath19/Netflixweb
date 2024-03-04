import React from 'react'
import Login from './Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browspage from './Browspage';

//import Header from './Header';

const Body = () => {

      
     const approuter=createBrowserRouter([
          {
            path:'/',
            element:<Login/>
          },
          {
            path:'/Browspage',
            element:<Browspage/>
          }
     ])


    

  return (
    <div>
         <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body;
