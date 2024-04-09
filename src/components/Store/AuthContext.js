
import React,{useState} from 'react';
const AuthContext= React.createContext({
    token:'',
    isSignedup:false,
    signIn:(token) =>{},
    signOut:()=>{}
})

 export const AuthContextProvider = (props) =>{
    const [token,setToken] = useState(null);

    const userIsSignedup = !!token;

    const signedInHandler = (token) =>{
        setToken(token);
    };
    const signOutHandler = () =>{
        setToken(null)
    }
    const contextValue={
        token:token,
        isSignedup:userIsSignedup,
        signIn:signedInHandler,
        signOut:signOutHandler
    }
    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
};
export default AuthContext;