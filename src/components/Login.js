import React,{useRef,useState} from 'react';
// import AuthContext from './Store/AuthContext';
import {useNavigate} from 'react-router-dom';
import  classes from './Login.module.css';

const Login =() =>{
//    const authCtx= useContext(AuthContext);
   const navigate=useNavigate();
const[isLogin,setIsLogin]=useState(false);
const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const switchAuthModeHandler = () =>{
        setIsLogin((prevState) => !prevState);
        navigate('/dash');
    };
    const submitHandler = (event) =>{
event.preventDefault();
const enteredEmailRef =emailInputRef.current.value;
const enteredPasswordRef=passwordInputRef.current.value;
let url;
if(isLogin){
url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyApkZTq4f1gVooTV5ykjGTHr5GugnKGM-o";
}else{
url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyApkZTq4f1gVooTV5ykjGTHr5GugnKGM-o"
}
   fetch(url,{
        method:'POST',
        body:JSON.stringify({
            email:enteredEmailRef,
        password:enteredPasswordRef,
        returnSecureToken:true,
        }),
        headers:{
            'Content-Type':'Application/json'
        }
    }
) .then((res) =>{
     if(res.ok){
         return res.json();
    
     }else{
         return res.json().then((data) =>{
             let errorMessage='Authentication failed!';
            //alert(errorMessage);
             throw new Error(errorMessage);
            //  console.log(data);
         });
     }
     }).then(data =>{
         console.log(data);
        
     }).catch(err =>{
         alert(err.message);
     })


    }
    return(
        <section className={classes.auth}>
            <form onSubmit={submitHandler}>
             <div className={classes.control}>
                
                <input type="email" required ref={emailInputRef} />
          </div>
          <div  className={classes.control}>
            <input type="password" required  ref={passwordInputRef}/>
          </div>
          <div  className={classes.actions}>
            <button type="submit" onClick={switchAuthModeHandler} >Login</button>
            <span>forgot password</span>
          </div>
          <div className={classes.button}> <button onClick={switchAuthModeHandler}> <div>Have an account ? login</div></button> </div>
                </form>

        </section>
       
       
    )
}
export default Login;
// import React, { useState } from 'react'
// import "./Login.css"
// // import { ThreeCircles } from 'react-loader-spinner';

// const Login = (props) => {

//     const [inputLogin,setInputLogin]=useState({
//         email:"",
//         password:""
//     })
//     function handleLogin(e){
//         let key=e.target.name;
//         setInputLogin({...inputLogin,[key]:e.target.value});
//     }
//     async function implementLogin(e){
//         e.preventDefault();
//         try{
//             const response=await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_AUTHENTICATION_API_KEY}`,{
//                 method: "POST",
//                 body: JSON.stringify({
//                     email: inputLogin.email,
//                     password: inputLogin.password,
//                     returnSecureToken: true,
//                 }),
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });

//             if (!response.ok) {
//                 // Check for HTTP error status codes
//                 const errorData = await response.json();
//                 throw new Error(errorData.error.message);
//             }

//             const data=await response.json();
//             props.setIdToken(data.idToken);
            
//             localStorage.setItem('token', data.idToken);
//             props.handleLogin(true);
//             console.log("Hello from login");
//         }
//         catch (err) {
//             alert(`Error: ${err.message}`);
//             console.log(err);
//         }
//     }
//     return (
//         <div className='login_parent'>
            
                
//                     <div className='login_child'>
//                         <h1>Login</h1>
//                         <form onSubmit={implementLogin} className='login_form'>
//                             <input type='email' placeholder='Email' 
//                             name='email' required
//                             onChange={handleLogin} value={inputLogin.email}
//                             />
            
//                             <input type='password' placeholder='Password' required
//                             name='password' onChange={handleLogin} value={inputLogin.password}
//                             />
//                             <button type='submit'>Login</button>
//                         </form>
//                         <p >Forget Password</p>
//                     </div>
//                     <button >Have an account? SignUp</button>
//                     </div>
//                     )};
//                     export default Login;