import React, { useEffect, useState } from 'react'
import logo from './imgweb/logo.png';
import { adduser } from './utils/Userslice';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import netav from './imgweb/netflixav.jpg'
import { RiArrowDownSLine } from "react-icons/ri";
import { removeuser } from './utils/Userslice'
import {  signOut } from "firebase/auth";

const Header = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let user=useSelector((data)=>data.user )
  let [show, setshow] = useState(false);
  function handlearrow() {
    setshow(!show)
  }

  function handlesignout() {

    
    signOut(auth).then(() => {

      
      
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(() => {


    let unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, photoURL, displayName } = user
        dispatch(adduser({ uid: uid, email: email, photoURL: photoURL, displayName: displayName }));
        // ...
        navigate('/browspage')
      } else {
        // User is signed out
        // ...
        dispatch(removeuser())
        navigate('/')
      }
    });

    return()=>unsubscribe()

  }, [])



  return (

    <div className={` z-20  p-2 pl-3 flex ${ user ?'bg-[rgba(0,0,0,0.8)]':''} w-12/12 justify-between `} >

       <div>
          <img src={logo} alt="logo" className='w-2/12'/>

       </div>


{
user &&

     <div className='pr-10'>
        <div className='flex'>
          <img src={netav} alt="avatar" className='w-[100px] p-2 cursor-pointer' />
          <div className='mt-7 '>
            <RiArrowDownSLine className='text-white text-4xl cursor-pointer ' onClick={handlearrow} />

          </div>
        </div>

        {
          show && (
            <div className=' bg-gray-200 w-[120px] h-[80px]  absolute transition-all mt-2'>
              <button className='p-3 bg-red-500 text-white ml-5 mt-2' onClick={handlesignout}>Sign Out</button>
            </div>)
        }

      </div>
    }


    </div>


  )
}

export default Header
