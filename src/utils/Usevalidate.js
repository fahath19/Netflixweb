import React from 'react'

 const Usevalidate = (email,password,name) => {
        const emailvalidate=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        const passwordvalidate=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
      //  const uname=/^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name)
      //  if(!uname) return "Name is invalid"
        if(!emailvalidate) return "EMAIL IS INVALID"
        if(!passwordvalidate) return "Password IS INVALID"
         return null;
         
}


export default Usevalidate;

//Bahad3@gmail.com
//Bahad@00