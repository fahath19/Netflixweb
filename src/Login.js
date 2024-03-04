import React, { useRef, useState } from 'react'
import Header from './Header'
import Usevalidate from './utils/Usevalidate'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from './firebase'
import { useNavigate } from 'react-router-dom';
import { adduser } from './utils/Userslice'
import { useDispatch } from 'react-redux'






const Login = () => {



  let navigate=useNavigate();
  let dispatch=useDispatch();
  let [issigin,setsigin]=useState(true)
  let [validatemsg,setvalidmsg]=useState('');
  let email=useRef(null);
  let password=useRef(null);
  let name=useRef(null);

  function handlesigin(){
     setsigin(!issigin)
  }
  //VALIDATE FUNCTION: Usevalidate(email.current.value,password.current.value)
  function validate(){
     let msg=Usevalidate(email.current.value,password.current.value);
     setvalidmsg(msg);
     if(validatemsg) return
     //SIGIN AND SIGNUP CODE AREA :



     if(!issigin){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user,{
          displayName:name.current.value,
          
        })

        .then(()=>{
          const {uid,email,photoURL,displayName}=auth.currentUser;
          
          console.log(displayName);
          dispatch(adduser({uid:uid,email:email,photoURL:photoURL,displayName:displayName}));



        })
        .catch((err)=>{
              console.log(err)
        })
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);

        setvalidmsg(errorCode+'---'+errorMessage);
      });


     



     }




     if(validatemsg==null){
      email.current.value=''
      password.current.value=''
     // name.current.value=''
     }

       //SIGIN STATEMENT:

     else{


        let msg=Usevalidate(email.current.value, password.current.value);
        setvalidmsg(msg);

        if(validatemsg) return;

        
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          console.log(user);
          navigate('/Browspage');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode);
          // ..
        });
      





     }


    
  }   

  return (
    <div className='bg-black bg-[url("./imgweb/netbackground.png")] h-[100vh]'>
      <div className='bg-[rgba(0,0,0,0.6)] h-[100vh]'>
 

      <Header />
           {/* <img src={bgimg} alt="bgimg" className='w-full h-[100%]' /> */}

           <form action="" onSubmit={(e)=>{e.preventDefault()}} className='flex flex-col w-3/12 p-10  bg-[rgba(0,0,0,0.7)] m-auto mt-[5%]   '>



            <h2 className='text-white mb-6 font-bold text-3xl font-sans  '>{(issigin)?"Sign In":"Sign Up"}</h2>



            {
              !issigin &&(
            <input type="text" ref={name} placeholder='Enter Name ' className='bg-[rgba(0,0,0,0.1)] p-2 mb-3  border border-gray-400 text-white'/>
              )
            }
            <input type="email"  ref={email} placeholder='Enter Email' className='bg-[rgba(0,0,0,0.1)]  p-2 border border-gray-400 text-white mb-3'/>
            <input type="password" ref={password} placeholder='Enter Password ' className='bg-[rgba(0,0,0,0.1)] p-2  border mb-3 border-gray-400 text-white'/>
            <p className='text-red-500 '>{validatemsg}</p>
            
           

            <button className='bg-red-600 p-2 mt-4 font-bold text-white text-2xl' onClick={validate}>{(issigin)?"Sign In":"Sign Up"}</button>

            <h2 className='text-white text-center mt-4' >Forget password?</h2>
           
             <h2 className='text-gray-300 p-2 mt-3 text-[1.2rem] cursor-pointer' onClick={handlesigin}>{(issigin)?"New To Netflix?":"Already Have An Acount" }<span className='font-bold text-white ml-2'>{(issigin)?"Sign Up":"Sign In" }</span> </h2>
        </form>


      </div>
       
    
    
    </div>
   
  )
}

export default Login


//