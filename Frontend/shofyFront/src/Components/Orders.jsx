import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { LuUserPen } from 'react-icons/lu';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { LuClipboardList } from 'react-icons/lu';
import { LuMapPin } from 'react-icons/lu';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { RiLockPasswordLine } from 'react-icons/ri';
import Footer from './Footer';
import img2 from '../images/logo.svg';
import axios from 'axios';

const Orders = () => {

  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const [arr, setArr] = useState([])

  const fetchData = async () => {
    const res = await axios.get('http://localhost:4000/api/singleOrder', {
      headers : {
        Authorization : `Bearer ${token}`
      }
    })

    setArr(res.data);
    
  }

  console.log(arr);
  

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
        <div className='flex flex-col h-max'>
        <div className='py-4 pl-24 border shadow-md'>
          <Link to={'/'} className=''>
            <img src={img2} alt='' />
          </Link >
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
                <Link to={'/address'}className='flex items-center'>
                  <span className='text-gray-600 text-sm'>
                    <LuMapPin />
                  </span>
                  <li className='flex items-center ml-2 text-sm text-gray-600 hover:text-blue-700'>
                    Address
                  </li>
                </Link>
                <Link className='flex items-center'>
                  <span className='text-gray-600 text-sm'>
                    <LuClipboardList />
                  </span>
                  <li className='flex items-center ml-2 text-sm text-gray-600 bg-blue-50 hover:text-blue-700'>
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
                <Link to={'/password'} className='flex items-center'>
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
            

<div className="w-[100%] lg:w-[70%] overflow-auto bg-white rounded-lg shadow-md p-10 mt-2 lg:mt-0">
    <table className="lg:w-full overflow-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 lg">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 whitespace-nowrap py-3 font-extrabold bg-gray-50 dark:bg-gray-800">
                    Order Id
                </th>
                <th scope="col" className="px-6  whitespace-nowrap py-3 font-extrabold">
                    Customer Name
                </th>
                <th scope="col" className="px-6  whitespace-nowrap py-3 font-extrabold">
                    Price
                </th>
                <th scope="col" className="px-6  whitespace-nowrap py-3 font-extrabold">
                    Payment Status
                </th>
                <th scope="col" className="px-6 whitespace-nowrap py-3 font-extrabold bg-gray-50 dark:bg-gray-800">
                    Email
                </th>
            </tr>
        </thead>
        <tbody>
          {arr.map((item) => {
            return (
              <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-bold text-[rgb(9,137,255)] text-base whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      {item.id}
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap text-black">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[rgb(119,174,242)] bg-gray-50 dark:bg-gray-800 ">
                    {item.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[rgb(119,174,242)] bg-gray-50 dark:bg-gray-800 ">
                    {item.payStatus}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[rgb(119,174,242)] bg-gray-50 dark:bg-gray-800 ">
                    {item.email}
                  </td>
              </tr>
            )
          })}
            
        </tbody>
    </table>
</div>


          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Orders