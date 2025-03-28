import React from 'react';
import Main from './Components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Information from './Components/Information';
import Address from './Components/Address';
import Orders from './Components/Orders';
import PasswordChange from './Components/PasswordChange';
import { Toaster } from 'react-hot-toast';
import SuperAdmin from './Components/SuperAdmin';
import SmartProducts from './Components/SmartProducts';
import Cart from './Components/Cart';
import Wish from './Components/Wish';
import AddCategory from './Components/AddCategory';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/info' element={<Information />} />
          <Route path='/address' element={<Address />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/password' element={<PasswordChange />} />
          <Route path='/super' element={<SuperAdmin />} />
          <Route path='/addCategory' element={<AddCategory />} />

          <Route path='/category/:category' element={<SmartProducts />} />

          <Route path='/cart' element={<Cart />} />
          <Route path='/wish' element={<Wish />} />

          <Route path='/payment/success' element={<p>Payment Success</p>} />
          <Route path='/payment/cancel' element={<p>Payment cancel</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
