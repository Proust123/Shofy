import React from 'react';
import { Link } from 'react-router-dom';
import { LuUserPen } from 'react-icons/lu';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { LuClipboardList } from 'react-icons/lu';
import { LuMapPin } from 'react-icons/lu';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { RiLockPasswordLine } from 'react-icons/ri';
import Footer from './Footer';
import img2 from '../images/logo.svg';

const UserProfile = () => {
  return (
    <>
      <div className='flex flex-col h-max'>
        <div className='py-4 pl-24 border shadow-md'>
          <Link to={'/'} className=''>
            <img src={img2} alt='' />
          </Link >
        </div>
        <div className='flex justify-center items-center h-[100vh] w-[100%] bg-gray-100  px-10'>
          {/* Sidebar */}
          <div className='w-[90%] mt-14 gap-y-5 lg:flex justify-between '>
            <div className='w-[100%] lg:w-[25%] bg-white rounded-lg shadow-md p-6'>
              <ul className='space-y-6 space-x-6'>
                <Link to={'/admin'} className='flex items-center'>
                  <span className='ml-6 text-gray-600 text-sm'>
                    <LuUserPen />
                  </span>
                  <li className='flex items-center ml-2 text-sm text-gray-600 hover:text-blue-700'>
                    Profile
                  </li>
                </Link>
                <Link to={'/info'} className='flex items-center'>
                  <span className='text-gray-600 text-sm'>
                    <IoIosInformationCircleOutline />
                  </span>
                  <li className='flex items-center ml-2 text-sm text-gray-600 bg-blue-50 hover:text-blue-700'>
                    Information
                  </li>
                </Link>
                <Link to={'/address'}className='flex items-center'>
                  <span className='text-gray-600 text-sm'>
                    <LuMapPin />
                  </span>
                  <li className='flex items-center ml-2 text-sm text-gray-600 hover:text-blue-700'>
                    Address
                  </li>
                </Link>
                <Link to={'/orders'} className='flex items-center'>
                  <span className='text-gray-600 text-sm'>
                    <LuClipboardList />
                  </span>
                  <li className='flex items-center ml-2 text-sm text-gray-600 hover:text-blue-700'>
                    My Orders
                  </li>
                </Link>
                <Link className='flex items-center'>
                  <span className='text-gray-600 text-sm'>
                    <IoIosNotificationsOutline />
                  </span>
                  <li className='flex items-center ml-2 text-sm text-gray-600 hover:text-blue-700'>
                    Notification
                  </li>
                </Link>
                <Link className='flex items-center'>
                  <span className='text-gray-600 text-sm'>
                    <RiLockPasswordLine />
                  </span>
                  <li className='flex items-center ml-2 text-sm text-gray-600 hover:text-blue-700'>
                    Change Password
                  </li>
                </Link>
              </ul>
            </div>

            {/* Main Content */}
            <div className='w-[100%] lg:w-[70%] bg-white rounded-lg shadow-md p-10 mt-8 lg:mt-0'>
              <h1 className='text-2xl font-semibold mb-6'>Personal Details</h1>
              <div className='grid grid-cols-2 gap-6'>
                {/* Input Fields */}
                <div className='flex items-center space-x-2'>
                  
                  <input
                    type='text'
                    placeholder='Shahnewaz Sakil'
                    className='w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200'
                  />
                </div>
                <div className='flex items-center space-x-2'>
                  
                  <input
                    type='email'
                    placeholder='example@mail.com'
                    className='w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200'
                  />
                </div>
                <div className='flex items-center space-x-2'>
                  
                  <input
                    type='text'
                    placeholder='shahnewzname'
                    className='w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200'
                  />
                </div>
                <div className='flex items-center space-x-2'>
                  
                  <input
                    type='text'
                    placeholder='shahnewzname'
                    className='w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200'
                  />
                </div>
                <div className='flex items-center space-x-2'>
                  
                  <input
                    type='tel'
                    placeholder='0123 456 7889'
                    className='w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200'
                  />
                </div>
                <div>
                  <select
                    className='w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200'
                    defaultValue='Male'
                  >
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>
                <div className='flex items-center space-x-2 col-span-2'>
                  
                  <input
                    type='text'
                    placeholder='3304 Randall Drive'
                    className='w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200'
                  />
                </div>
                <div className='col-span-2'>
                  <textarea
                    placeholder='Hi there, this is my bio...'
                    className='w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200'
                    rows='4'
                  ></textarea>
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

export default UserProfile;
