import React, { useState } from "react";
import { LuUserPen } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LuClipboardList } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import img from '../images/user-10.jpg'
import img2 from '../images/logo.svg'
import Footer from "./Footer";
import { TfiDownload } from "react-icons/tfi";
import { BsBox2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { GoGift } from "react-icons/go";
import axios from "axios";

const Admin = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user' || '')))
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    // console.log('click');
    

    navigate('/login')
  }

  return (
    <>
      <div className="flex flex-col">
        <div className='py-4 pl-24 border shadow-md'>
          <Link to={'/'} className=''>
            <img src={img2} alt="" />
          </Link >
        </div>
        <div className="flex justify-center items-center h-[80vh] w-[100%] bg-gray-100 px-10">
        {/* Sidebar */}
          <div className="w-[90%]  gap-y-5 lg:flex justify-between ">
            <div className="w-[100%] lg:w-[25%] bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-6 space-x-6">
                <Link className="flex items-center">
                  <span className="ml-6 text-gray-600 text-sm"><LuUserPen /></span>
                  <li className="flex items-center ml-2 text-sm text-gray-600 bg-blue-50 hover:text-blue-700">
                    
                    Profile
                  </li>
                </Link>
                <Link to={'/info'} className="flex items-center">
                  <span className="text-gray-600 text-sm"><IoIosInformationCircleOutline /></span>
                  <li className="flex items-center ml-2 text-sm text-gray-600 hover:text-blue-700">
                    Information
                  </li>

                </Link>
                <Link to={'/address'} className="flex items-center">
                  <span className="text-gray-600 text-sm"><LuMapPin /></span>
                  <li className="flex items-center ml-2 text-sm text-gray-600 hover:text-blue-700">
                    Address
                  </li>
                </Link>
                <Link to={'/orders'} className="flex items-center">
                  <span className="text-gray-600 text-sm"><LuClipboardList /></span>
                  <li className="flex items-center ml-2 text-sm text-gray-600 hover:text-blue-700">
                    My Orders
                  </li>
                </Link>
                <Link className="flex items-center">
                  <span className="text-gray-600 text-sm"><IoIosNotificationsOutline /></span>
                  <li className="flex items-center ml-2 text-sm text-gray-600 hover:text-blue-700">
                    Notification
                  </li>
                </Link>
                <Link to={'/password'} className="flex items-center">
                  <span className="text-gray-600 text-sm"><RiLockPasswordLine /></span>
                  <li className="flex items-center ml-2 text-sm text-gray-600 hover:text-blue-700">
                    Change Password
                  </li>
                </Link>
              </ul>
            </div>

          
            <div className="w-[100%] lg:w-[70%] bg-white rounded-lg shadow-md p-10 mt-8 lg:mt-0">
              {/* Profile Header */}
              <div className="md:flex items-center justify-between">
                <div className="flex flex-col">
                  <div>
                    <img
                      src={img}
                      alt="User"
                      className="w-20 h-20 rounded-full "
                    />
                  </div>
                  <div className="">
                    <h2 className="text-xl font-semibold">Welcome User!</h2>
                    <p className="text-gray-500">You have <span className="text-blue-500 font-semibold">08</span> notifications</p>
                  </div>
                </div>
                <div onClick={logout} className="h-[40px] w-[80px] text-black flex justify-center items-center text-sm border">Logout</div>
              </div>

              {/* Dashboard Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="flex flex-col justify-center items-center border-2 py-5">
                  <div className="relative inline-block">
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</span>
                    <TfiDownload className="text-6xl" />
                    
                  </div>
                  <p className="mt-2 text-gray-600">Downloads</p>
                </div>
                <div className="flex flex-col justify-center items-center border-2 py-5">
                  <div className="relative inline-block">
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">5</span>
                    <BsBox2 className="text-6xl" />
                  </div>
                  <p className="mt-2 text-gray-600">Orders</p>
                </div>
                <div className="flex flex-col justify-center items-center border-2 py-5">
                  <div className="relative inline-block">
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">10</span>
                    <CiHeart className="text-6xl" />
                  </div>
                  <p className="mt-2 text-gray-600">Wishlist</p>
                </div>
                <div className="flex flex-col justify-center items-center border-2 py-5">
                  <div className="relative inline-block">
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">7</span>
                    <GoGift className="text-6xl" />
                  </div>
                  <p className="mt-2 text-gray-600">Gift Box</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Admin;
