// import React,{useState,useRef} from 'react';
// import classes from './AuthForm.module.css';
//  import {useNavigate} from 'react-router-dom';

// const AuthForm = () =>{
//      const navigate = useNavigate();
//     const [isLogin,setisLogin]=useState(false);
//     const emailInputRef=useRef();
//     const passwordInputRef=useRef();
//     const changePasswordInputRef=useRef();
//     const switchAuthModeHandler = () =>{
//         //  setisLogin((prevState) => !prevState);
//         navigate('/login');
//      };
    
//      const submitHandler=(event) =>{
// event.preventDefault();


// const enteredEmailRef=emailInputRef.current.value;
// const enteredPasswordRef=passwordInputRef.current.value;
// // const enteredChangePasswordRef=changePasswordInputRef.current.value;
// let url;
// if(isLogin){
// // url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyApkZTq4f1gVooTV5ykjGTHr5GugnKGM-o";
// }else{
//     url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyApkZTq4f1gVooTV5ykjGTHr5GugnKGM-o"

// }
// fetch (
//     url,{
//     method:"POST",
//     body:JSON.stringify({
//         email:enteredEmailRef,
//         password:enteredPasswordRef,
//         returnSecureToken:true,
//     }),
//     headers:{
//         'Content-Type':'Application/json'
//     },
// }
// )
//  .then((res) =>{
// if(res.ok){
//     return res.json()

// }else{
//     return res.json().then((data) =>{
//         let errorMessage='Authentication failed!';
        
//         throw new Error(errorMessage);
//         //   console.log(data);
//      })
    
// }
// }).then(data =>{
//     console.log(data);
    
// }).catch(err =>{
//     alert(err.message);
// })
     

//     return (
//         <div className={classes.auth}>
//             <section>
//                 <h2>Sign Up</h2>
//                 <form onSubmit={submitHandler}>
//                     <div className={classes.control}>
                       
//                         <input type="email" placeholder='Email'required ref={emailInputRef}/>
//                     </div>
//                     <div className={classes.control}>
                       
//                         <input type="password" placeholder='password' required ref={passwordInputRef}/>
//                     </div>
//                     <div className={classes.control}>
                        
//                         <input type="password" placeholder='ChangePassword'  ref={changePasswordInputRef}/>
//                     </div>
//                     <div className={classes.actions}>
//                         <button type="submit" >Sign Up</button>

//                     <button onClick={switchAuthModeHandler}> <div>Have an account ? login</div></button>  
//                     </div>
//                 </form>
//             </section>
//         </div>
//     )
// };
// }
// export default AuthForm;
import React, { useState, useRef } from 'react';
import classes from './AuthForm.module.css';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const changePasswordInputRef = useRef();

    const switchAuthModeHandler = () => {
        setIsLogin(prevState => !prevState);
        navigate('/login');
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmailRef = emailInputRef.current.value;
        const enteredPasswordRef = passwordInputRef.current.value;

        let url;
        if (isLogin) {
            // Login URL
        } else {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyApkZTq4f1gVooTV5ykjGTHr5GugnKGM-o"
        }

        fetch(
            url,
            {
                method: "POST",
                body: JSON.stringify({
                    email: enteredEmailRef,
                    password: enteredPasswordRef,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        ).then((res) => {
                if (res.ok) {
                    //return res.json()
                } else {
                    return res.json().then((data) => {
                        let errorMessage = 'Authentication failed!';
                        // if(data &&data.error&&data.error.message){
                        //     errorMessage=data.error.message;
                        // }
alert(errorMessage);
                        
                    });

                }
            // }).then(data => {
            //     console.log(data);
            // }).catch(err => {
            //     alert(err.message);
            // })
    });

};

    return (
        <div className={classes.auth}>
            <section>
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <input type="email" placeholder='Email' required ref={emailInputRef} />
                    </div>
                    <div className={classes.control}>
                        <input type="password" placeholder='Password' required ref={passwordInputRef} />
                    </div>
                    {!isLogin && (
                        <div className={classes.control}>
                            <input type="password" placeholder='Change Password' ref={changePasswordInputRef} />
                        </div>
                    )}
                    <div className={classes.actions}>
                        <button type="submit" >Sign Up</button>

                    <button onClick={switchAuthModeHandler}> <div>Have an account ? login</div></button>  
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AuthForm;