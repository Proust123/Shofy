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

const AddressComponent = () => {
  return (
    <div className='flex flex-col h-max'>
      <div className='py-4 pl-24 border shadow-md'>
        <Link to={'/'} className=''>
          <img src={img2} alt='' />
        </Link>
      </div>
      <div className='flex justify-center items-center h-[70vh] w-[100%] bg-gray-100  px-10'>
        {/* Sidebar */}
        <div className='w-[90%] mt-5 gap-y-5 lg:flex justify-between '>
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
                <li className='flex items-center ml-2 text-sm text-gray-600  hover:text-blue-700'>
                  Information
                </li>
              </Link>
              <Link to={'/address'} className='flex items-center'>
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

          {/* Address Section */}
          <div className='w-[100%] lg:w-[70%] bg-white rounded-lg shadow-md p-10 mt-8 lg:mt-0'>
            <div className='grid grid-cols-2 gap-6'>
              {/* Billing Address */}
              <div className='bg-white shadow-lg rounded-lg p-6'>
                <div className='flex items-center space-x-4 mb-4'>
                  
                  <h2 className='text-lg font-semibold'>Billing Address</h2>
                </div>
                <p>
                  <span className='font-medium'>Street:</span> 3576 Glen Street
                </p>
                <p>
                  <span className='font-medium'>City:</span> Summer Shade
                </p>
                <p>
                  <span className='font-medium'>State/province/area:</span>{' '}
                  Kentucky
                </p>
                <p>
                  <span className='font-medium'>Phone number:</span>{' '}
                  270-428-8378
                </p>
                <p>
                  <span className='font-medium'>Zip code:</span> 42166
                </p>
                <p>
                  <span className='font-medium'>Country calling code:</span> +1
                </p>
                <p>
                  <span className='font-medium'>Country:</span> United States
                </p>
              </div>

              {/* Shipping Address */}
              <div className='bg-white shadow-lg rounded-lg p-6'>
                <div className='flex items-center space-x-4 mb-4'>
                  
                  <h2 className='text-lg font-semibold'>Shipping Address</h2>
                </div>
                <p>
                  <span className='font-medium'>Street:</span> 3133 Lewis Street
                </p>
                <p>
                  <span className='font-medium'>City:</span> Naperville
                </p>
                <p>
                  <span className='font-medium'>State/province/area:</span>{' '}
                  Illinois
                </p>
                <p>
                  <span className='font-medium'>Phone number:</span>{' '}
                  630-857-9127
                </p>
                <p>
                  <span className='font-medium'>Zip code:</span> 60563
                </p>
                <p>
                  <span className='font-medium'>Country calling code:</span> +1
                </p>
                <p>
                  <span className='font-medium'>Country:</span> United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddressComponent;
