import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, BrowserRouter, Routes } from 'react-router-dom'
import Header from './Screens/Header';
import { Footer } from './Screens/Footer';
import { Home } from './Screens/Home';
import Collection from './Screens/Collection';
import { SingleProduct } from './Screens/SingleProduct';
import Contact from './Screens/Contact';
import AboutUs from './Screens/AboutUs';
import Cart from './Screens/Cart';
import OtpVerification from './Screens/OtpVerification';
import UserDetailsForm from './Screens/UserDetailsForm';
import OrderPlaced from './Screens/OrderPlaced';
import Developer from './Screens/Developer';
import './css/css-animate.css';
import './css/css-owl.theme.default.min.css';
import './css/css-magnific-popup.css';
import './css/css-aos.css';
import './css/css-ionicons.min.css';
import './css/css-bootstrap-datepicker.css';
import './css/css-jquery.timepicker.css';
import './css/css-icomoon.css';
import './css/css-style.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/singleProduct/:id' element={<SingleProduct />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/orders' element={<Orders />} /> */}
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route

          path='/verifyPhoneNumber'
          element={<VerifyPhoneNumber />}
        /> */}
        <Route path='/otpVerification' element={<OtpVerification />} />
        <Route path='/userDetailsForm' element={<UserDetailsForm />} />
        <Route path='/orderPlaced' element={<OrderPlaced />} />
        <Route path='/developer' element={<Developer />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
