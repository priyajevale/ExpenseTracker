import React,{useState,useRef} from 'react';
import classes from './AuthForm.module.css';

const AuthForm = () =>{
    const [isLogin,setisLogin]=useState(false);
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const changePasswordInputRef=useRef();
    const switchAuthModeHandler = () =>{
        setisLogin((prevState) => !prevState);
     };
     const submitHandler=(event) =>{
event.preventDefault();

const enteredEmailRef=emailInputRef.current.value;
const enteredPasswordRef=passwordInputRef.current.value;
// const enteredChangePasswordRef=changePasswordInputRef.current.value;
if(isLogin){

}else{
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyApkZTq4f1gVooTV5ykjGTHr5GugnKGM-o",{
        method:"POST",
        body:JSON.stringify({
            email:enteredEmailRef,
            password:enteredPasswordRef,
            returnSecureToken:true,
        }),
        headers:{
            'Content-Type':'Application/json'
        },
    }
).then((res) =>{
    if(res.ok){

    }else{
        return res.json().then((data) =>{
            console.log(data);
        })
    }
})
}
     }

    return (
        <div className={classes.auth}>
            <section>
                <h2>{isLogin ? "login" :"sign up"}</h2>
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                       
                        <input type="email" placeholder='Email'required ref={emailInputRef}/>
                    </div>
                    <div className={classes.control}>
                       
                        <input type="password" placeholder='password' required ref={passwordInputRef}/>
                    </div>
                    <div className={classes.control}>
                        
                        <input type="password" placeholder='ChangePassword' required ref={changePasswordInputRef}/>
                    </div>
                    <div className={classes.actions}>
                        <button >{isLogin ? 'login' :"sign up"}</button>
                       <button onClick={switchAuthModeHandler}> <div>Have an account ? login</div></button> 
                    </div>
                </form>
            </section>
        </div>
    )
};
export default AuthForm;
