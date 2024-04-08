import AuthForm from './components/AuthForm';
import './App.css';
import MainNavigation from './components/Layout/MainNavigation';
import {BrowserRouter as Router} from 'react-router-dom';
// import Home from './components/Pages/Home';
// import AboutUs from './components/Pages/AboutUs';
// import Product from './components/Pages/Product';

function App() {
  return (
    
    <Router>
      <div>
      <MainNavigation/>
      {/* <Routes>
     
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
                 <Route path='/aboutus' element={<AboutUs/>}/>
                    </Routes>
       */}
      </div>
      <AuthForm/>
      </Router>
      
    
      
      
    
  );
}

export default App;
