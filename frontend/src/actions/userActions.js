import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/userConstants"

export const loginUser=(email,password)=>async(dispatch)=>{
try{
    console.log("in action "+email+password)
    dispatch({
        type: USER_LOGIN_REQUEST
        
    })
    
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }
    const {data}=await axios.post('/api/users/login',{email,password},config)

    dispatch({
        type:USER_LOGIN_SUCCESS,
        payload:data
    })

    localStorage.setItem('userInfo',JSON.stringify(data))
    

}catch(error){
    dispatch({
        type:USER_LOGIN_FAIL,
        payload:
        error.response && error.response.data.message?error.response.data.message:error.message
    })
}

}


export const logOut=()=>(dispatch)=>{

    dispatch({
        type:USER_LOGOUT
    })
    localStorage.removeItem('userInfo')
}