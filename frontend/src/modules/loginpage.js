import { useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import '../css/login.css'
export const Login=()=>{
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const Login=async()=>{
        const formData= new FormData();
        formData.append('email',email);
        formData.append('password',password);
        formData.forEach((val,key)=>{
            console.log(val)
        })
        // let user=await axios.post('http://localhost:8080/user/login',formData)
        fetch("http://localhost:8080/user/addrecipe",{
            method:'POST',
            // headers:{
            //     'content-Type':'application/json',
            //     'accept':'application/json'
            // },
            body:formData }).then().then().catch(err=>{console.log(err)})
    }
    useEffect(()=>{
      Login()  
    },[])
    return(
        <div className='maindiv'>   
            <div className='section'>
                    <h1 className='h1'>Sign In</h1>
                    <h2 className='h2'>Email</h2>
                    <div className='input'>
                        <input type="email" placeholder='email' onChange={(event)=>{setEmail(event.target.value)}} value={email}  required/>
                        <h2 className='h2'>Password</h2>
                        <input type="password" placeholder='password' onChange={(event)=>{setPassword(event.target.value)}} value={password}/>
                        
                    </div>
                    <input type="checkbox"placeholder='rememberme'/>
                    Remember me
                    <Link to="/landing">
                    <button className="submitButton" onClick={Login}>Submit</button>
                    </Link>
                    
                    <h6 className='h6'> forget <a >password?</a></h6>
            </div>
        </div>
    )
}