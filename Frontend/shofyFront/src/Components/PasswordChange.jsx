import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LuUserPen } from 'react-icons/lu';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { LuClipboardList } from 'react-icons/lu';
import { LuMapPin } from 'react-icons/lu';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { RiLockPasswordLine } from 'react-icons/ri';
import Footer from './Footer';
import img2 from '../images/logo.svg';
import toast from 'react-hot-toast';
import { updateChangePassword, emptyChangePassword } from '../redux/reduxSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const PasswordChange = () => {
  // const changePass = useSelector((state) => state.allReducers.changePassword);
  const [changePass, setChangePass] = useState({
    old: '',
    new: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(changePass);

  const [token, setToken] = useState(localStorage.getItem('token') || '');

  function handleChange(e) {
    const { name, value } = e.target;

    setChangePass({ ...changePass, [name]: value });
    // dispatch(updateChangePassword({ [name]: value }));
  }

  async function change() {
    console.log(changePass);

    const res = await axios.patch(
      'http://localhost:4000/api/change-password',
      changePass,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    console.log('clicking');

    if (res.data.success) {
      toast.success(res.data.message);
      setTimeout(() => {
        navigate('/');
      }, 100);
    } else {
      toast.error(res.data.message);
    }

    dispatch(emptyChangePassword());
  }

  return (
    <>
      <div className='flex flex-col h-max'>
        <div className='py-4 pl-24 border shadow-md'>
          <Link to={'/'} className=''>
            <img src={img2} alt='' />
          </Link>
        </div>
        <div className='flex justify-center items-center mt-10 lg:mt-0 h-[80vh] w-[100%] bg-white  px-10'>
          {/* Sidebar */}
          <div className='w-[90%] gap-y-5 lg:flex justify-between '>
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
                  <li className='flex items-center ml-2 text-sm text-gray-600  hover:text-blue-700'>
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
                  <li className='flex items-center ml-2 text-sm bg-blue-50 text-gray-600 hover:text-blue-700'>
                    Change Password
                  </li>
                </Link>
              </ul>
            </div>

            {/* Main Content */}

            <div className='w-[100%] lg:w-[70%] bg-white rounded-lg shadow-md p-6'>
              <div className='flex flex-col justify-between'>
                <fieldset className='border-2 h-16 w-full pl-5'>
                  <legend>Old Password</legend>
                  <input
                    className='h-6 border-0 focus:ring-0'
                    type='password'
                    name='old'
                    value={changePass.old}
                    onChange={handleChange}
                    id='Password1'
                  />
                </fieldset>
                <fieldset className='mt-5 border-2 h-16 w-full pl-5'>
                  <legend>New Password</legend>
                  <input
                    className='h-6 border-0 focus:ring-0'
                    type='password'
                    name='new'
                    value={changePass.new}
                    onChange={handleChange}
                    id='Password'
                  />
                </fieldset>
                <button
                  onClick={change}
                  className='mt-5 bg-black h-16 w-36 text-white font-semibold flex justify-center items-center hover:bg-white hover:text-black duration-500 hover:border border-black cursor-pointer'
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PasswordChange;
