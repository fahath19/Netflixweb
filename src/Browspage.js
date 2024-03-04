import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'

const Browspage = () => {
  let data=useSelector((data)=>data.user )


  return (
    <div>
        
         <Header/>
        <h2 className='text-center'>WELCOME TO { data?.displayName || data?.email  }</h2>
        
    </div>
  )
}

export default Browspage
