import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FaBarsStaggered } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import menu1 from '../images/menu-home-1.jpg'
import menu2 from '../images/menu-home-2.jpg'
import menu3 from '../images/menu-home-3.jpg'
import menu4 from '../images/menu-home-4.jpg'
import { FaPhoneVolume } from "react-icons/fa6";
import axios from 'axios';



const   ThirdRow = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };


  const [newArr, setNewArr] = useState([])

  useEffect(() => {
    fetchCategories();
  }, []);

const fetchCategories = async () => {
    const res = await axios.get('http://localhost:4000/api/allCategories');

    setNewArr(res.data);
};


  return (
    <div className="w-[100%] border hidden xl:flex justify-center">
      <div className="w-[85%]">
        <nav className='flex justify-between items-center'>
          <div className='flex relative w-[68%]'>
            <div className="relative w-[36%]">
                <div
                onClick={toggleDropdown}
                className="w-[100%] px-3 py-3 bg-[rgb(9,137,255)] text-white -z-50 font-semibold flex items-center justify-between cursor-pointer"
                >
                <div className="flex items-center gap-x-2">
                    <FaBarsStaggered />
                    All Categories
                </div>
                <IoIosArrowDown />
                </div>
                {dropdownVisible && (
                <div className="absolute bg-black w-[100%] z-10">
                    {newArr.map((item, idx) => {
                        return (
                            <div className="h-[70px]  bg-white border-b-gray-200 border flex justify-center items-center ">
                                <Link to={`/category/${item.name}`} className='flex gap-x-5 items-center'>
                                    <img src={item.img} alt="" className='h-10'/>
                                    <h3 className='font-semibold text-gray-500'>{item.name}</h3>
                                </Link>
                            </div>
                        )
                    })}
                   
                </div>
                )}
            </div>

            <ul className='w-[64%] h-12  flex px-5 text-sm font-semibold justify-between items-center'>
                <div className='relative group'>
                    <Link><li className='flex items-center gap-x-1'>Home <IoIosArrowDown /></li></Link>

                    <div className='absolute w-[1150px] p-3 border z-50 bg-white -left-80 top-12 hidden group-hover:flex justify-between items-center'>
                        <Link className='w-[24%] border  flex flex-col justify-center items-center'>
                            <img src={menu1} alt="" className='hover:contrast-50'/>
                            <h3>Electronics</h3>
                        </Link>
                        <Link className='w-[24%] border h-10 flex flex-col justify-center items-center'>
                            <img src={menu2} alt="" className='hover:contrast-50'/>
                            <h3>Fashion</h3>
                        </Link>
                        <Link className='w-[24%] border h-10 flex flex-col justify-center items-center'>
                            <img src={menu3} alt="" className='hover:contrast-50'/>
                            <h3>Beauty</h3>
                        </Link>
                        <Link className='w-[24%] border h-10 flex flex-col justify-center items-center'>
                            <img src={menu4} alt="" className='hover:contrast-50'/>
                            <h3>Jewelry</h3>
                        </Link>
                    </div>
                </div>

                <div className='relative group'>
                  <Link><li className='flex items-center gap-x-1'> Shop <IoIosArrowDown /></li></Link>

                  <div className='absolute w-[1150px] p-3 border z-50 bg-white -left-96 top-12 hidden group-hover:flex justify-between items-center'>
                        <Link className='w-[24%] border  flex flex-col justify-center items-center'>
                            <img src={menu1} alt="" className='hover:contrast-50'/>
                            <h3>Electronics</h3>
                        </Link>
                        <Link className='w-[24%] border h-10 flex flex-col justify-center items-center'>
                            <img src={menu2} alt="" className='hover:contrast-50'/>
                            <h3>Fashion</h3>
                        </Link>
                        <Link className='w-[24%] border h-10 flex flex-col justify-center items-center'>
                            <img src={menu3} alt="" className='hover:contrast-50'/>
                            <h3>Beauty</h3>
                        </Link>
                        <Link className='w-[24%] border h-10 flex flex-col justify-center items-center'>
                            <img src={menu4} alt="" className='hover:contrast-50'/>
                            <h3>Jewelry</h3>
                        </Link>
                    </div>
                </div>
                <Link><li className='flex items-center gap-x-1'>Products</li></Link>
                <Link><li>Coupon</li></Link>
                <Link><li>Blog</li></Link>
                <Link><li>Contact</li></Link>
                
            </ul>

            
          </div>

          <div className='flex items-center gap-x-3'>
            <FaPhoneVolume color='rgb(9,137,255)' size={20}/>
             <div className=''>
                <p className='text-xs font-semibold text-gray-500 leading-none'>Hotline:</p>
                <h3 className='text-sm font-medium hover:text-[rgb(9,137,255)] cursor-pointer'>+(402) 763 282 46</h3>    
             </div>   
          </div>

        </nav>
      </div>
    </div>
  );
};

export default ThirdRow;

