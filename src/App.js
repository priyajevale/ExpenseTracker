// import AuthForm from './components/AuthForm';
// import './App.css';
// import React from 'react';
// import Login from './components/Login';
// import MainNavigation from './components/Layout/MainNavigation';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import { AuthContextProvider } from './components/Store/AuthContext';
//  import Home from './components/Pages/Home';

// import AboutUs from './components/Pages/AboutUs';
// import Product from './components/Pages/Product';

// function App() {
//   return (
//     <AuthContextProvider>
//       <Router>
//       <div>
//       <MainNavigation/>
      
       
//      <Routes>
      
//         {/* <Route path='/home' element={<Home/>} /> */}
//         <Route path='/login' element={<Login />} />
//         <Route path='/product' element={<Product/>}/>
//                  <Route path='/aboutus' element={<AboutUs/>}/>
//                     </Routes>
       
//       </div>
//       <AuthForm/>
//       </Router>
      
    
      
//     </AuthContextProvider>
    
      
    
//   );
// }

// export default App;
// import React,{useContext} from 'react';
// import MainNavigation from './components/Layout/MainNavigation';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthContextProvider } from './components/Store/AuthContext';
// import AuthForm from './components/AuthForm'; // Import AuthForm component here
// import Home from './components/Pages/Home';
// import AboutUs from './components/Pages/AboutUs';
// import Product from './components/Pages/Product';
// import Login from './components/Login'; // Import Login component here
// import AuthContext from './components/Store/AuthContext';

// function App() {
//   const authctx=useContext(AuthContext);
//     const isSignedUp = authctx.isSignedup;
//   return (
//     <AuthContextProvider>
//     <Router>
//       <div>
//         <MainNavigation />
//         <Routes>
//           <Route path='/home' element={<Home />} />
//           <Route path='/product' element={<Product />} />
//           <Route path='/aboutus' element={<AboutUs />} />
//           <Route path='/login' element={<Login />} />
//           {!isSignedUp && (
//             <Route path='/authform' element={<AuthForm />} />
//           )}
//           {isSignedUp && (
//              <Route path='/login' element={<Login />} /> 
//           )}
//         </Routes>
//       </div>
//     </Router>
//   </AuthContextProvider>
//   //   <AuthContextProvider>
//   //   <Router>
//   //     <div>
//   //       <MainNavigation />
       
//   //       <Routes>
//   //         {isSignedUp ? (
//   //           <React.Fragment>
//   //             <Route path='/login' element={<Login />} />
//   //             <Route path='/home' element={<Home />} />
//   //             <Route path='/product' element={<Product />} />
//   //             <Route path='/aboutus' element={<AboutUs />} /> 
//   //           </React.Fragment>
//   //         ) : (
//   //           <Route path='/authform' element={<AuthForm />} />
//   //         )}
//   //       </Routes>
//   //     </div>
//   //   </Router>
//   // </AuthContextProvider>
//   );
// }

// export default App;
import React from 'react';
import MainNavigation from './components/Layout/MainNavigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './components/Store/AuthContext';
import AuthForm from './components/AuthForm';
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';
import Product from './components/Pages/Product';
import Login from './components/Login';
import Dashboard from './components/Pages/Dashboard';
import UserDetails from './components/Pages/UserDetails';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div>
          <MainNavigation />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/login' element={<Login />} />
            <Route path='/authform' element={<AuthForm />} />
            <Route path='dash' element={<Dashboard/>} />
            <Route path='user' element={<UserDetails/>} />
          </Routes>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;