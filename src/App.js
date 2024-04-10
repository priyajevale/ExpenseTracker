
// import React from 'react';
// import MainNavigation from './components/Layout/MainNavigation';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthContextProvider } from './components/Store/AuthContext';
// import AuthForm from './components/AuthForm';
// import Home from './components/Pages/Home';
// import AboutUs from './components/Pages/AboutUs';
// import Product from './components/Pages/Product';
// import Login from './components/Login';
// import Dashboard from './components/Pages/Dashboard';
// import UserDetails from './components/Pages/UserDetails';

// function App() {
//   return (
//     <AuthContextProvider>
//       <Router>
//         <div>
//           <MainNavigation />
//           <Routes>
//             <Route path='/home' element={<Home />} />
//             <Route path='/product' element={<Product />} />
//             <Route path='/aboutus' element={<AboutUs />} />
//             <Route path='/login' element={<Login />} />
//             <Route path='/authform' element={<AuthForm />} />
//             <Route path='dash' element={<Dashboard/>} />
//             <Route path='user' element={<UserDetails/>} />
//           </Routes>
//         </div>
//       </Router>
//     </AuthContextProvider>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavigation from "./components/Layout/MainNavigation";
import AuthForm from './components/AuthForm';
import Login from "./components/Login";
import ForgotPassword from "./components/Pages/ForgotPasword";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("idToken")
  );

  const handleLogout = () => {
    localStorage.removeItem("idToken");
    setIsAuthenticated(false);
    window.location.href = "/login";
  };

  return (
    <Router>
      <div>
        <MainNavigation isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Routes>
          <Route path="/authform" element={<AuthForm />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;