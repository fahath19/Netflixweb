import { configureStore } from "@reduxjs/toolkit";
import Userdata from './Userslice'
let appstore=configureStore(
    {
        reducer:{
            user:Userdata
        }
    }
)
export default appstore