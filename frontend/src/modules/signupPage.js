import { useEffect, useState } from 'react'
import '../css/signup.css'

export const Signup=()=>{
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [rePassword,setrePassword]=useState()
    const Submit=async()=>{
        if(password==rePassword){
            const formdata=new FormData()
            formdata.append("email",email)
            formdata.append("password",password)
            formdata.forEach((ele)=>{
                console.log(ele)
            })
            // let user=await axios.post('http://localhost:8080/user/login',formdata)
            await fetch('http://localhost:8080/user/register',{
                method:'POST',
               
                body:formdata}).then().then().catch(err=>{console.log(err)})
            
        }
        
    }
    useEffect(()=>{
        Submit()
    },[])
    return (
        <div className='maindivs'>
            <div className='sections'>
                
                <h1 className='h1s'> Sign Up</h1>
                <div className='inputs'>
                        <input type="email" placeholder='email' onChange={(event)=>{setEmail(event.target.value)}} value={email}  required/>
                        <input type="password" placeholder='password' onChange={(event)=>{setPassword(event.target.value)}} value={password}/>
                        <input type="password" placeholder='re-enter-password' onChange={(event)=>{setrePassword(event.target.value)}} value={rePassword}/>
                </div>
                <input type='checkbox' /><span className='ps'>I agree with <span>Terms And  Conditions</span></span>
                <button onClick={Submit} className='submitButtons'>Continue</button>
            </div>
           
        </div>
    )
}