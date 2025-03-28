import React, { useEffect, useState } from 'react'
import img from '../images/logo.svg'
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import  {Link, useNavigate}  from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { HiMiniXMark } from "react-icons/hi2";
import axios from 'axios';

const SecondRow = () => {
    
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('user' || '')))
    const countCart = useSelector((state) => state.allReducers.countCart)
    const countWish = useSelector((state) => state.allReducers.countWish)
    const [cart, setCart] = useState(false)
    let  arr = useSelector((state) => state.allReducers.cartItems)
    let  wishArr = useSelector((state) => state.allReducers.wishItems)
    const [newArr, setNewArr] = useState([])

    console.log(arr);
    

    function showCart() {
        setCart(true)
    }

    function closeCart() {
        setCart(false)
    }

    const navigate = useNavigate()
    

    // console.log(users);
    

    function check() {
        if(!users) {
            navigate('/login')
        }else{
            if(users?.role === 'user') {
                
                navigate('/admin')
                
            }else if(users?.role === 'admin') {
                
                navigate('/super')
                
            }
        }
    }

    useEffect(() => {
        fetchCategories();
      }, []);

    const fetchCategories = async () => {
        const res = await axios.get('http://localhost:4000/api/allCategories');
    
        setNewArr(res.data);
    };


  return (


    <>
    <div className='w-[100%] hidden justify-center xl:flex'>
        <div className='w-[85%] py-7 flex justify-between'>
            <div className='w-[25%] '>
                <img src={img} alt="" />
            </div>
            <div className='w-[47%] h-12'>
                
                <form action="" className='flex justify-between w-[90%] items-center border-2 h-full border-[rgb(9,137,255)]'>
                    <input type="text" className='border-r border-0 pl-5 h-8 w-[50%]' placeholder='Search for Products...'/>
                    
                    {/* <select name="" id="" className='border-0'>
                        <option value="">Select Category</option>
                        <option value="">Electronics</option>
                        <option value="">Fashion</option>
                        <option value="">Beauty</option>
                        <option value="">Jewelery</option>
                    </select> */}

                    <select
                        name='option'
                        value
                        
                        className='w-18 rounded border-gray-300'
                      >
                        <option value=''>Select Category</option>
                        {newArr.map((item, idx) => (
                          <option key={idx} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>

                    <button className='bg-[rgb(9,137,255)] w-[10%] h-full flex justify-center items-center text-xl text-white'><CiSearch /></button>
                </form>

            </div>
            <div className='w-[28%] flex'>
                <div className='w-[50%]'>
                    <div onClick={check} className='flex gap-x-1 items-center cursor-pointer'>
                        <div className='h-12 w-12 rounded-full border-2 border-gray-200 text-gray-500 flex justify-center items-center'>
                            <FaRegUser />
                        </div>
                        <div className=''>
                        <p className='text-sm text-gray-500'>
                            {users ? (users.role === 'user' ? 'Hello, User' : users.role === 'admin' ? 'Hello, Admin' : 'Hello, Sign in') : 'Hello, Sign in'}
                        </p>
                            <h2 className='text-sm font-semibold'>Your Account</h2>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] flex justify-end items-center gap-x-2'>
                    <span className='relative cursor-pointer'>
                        <Link to={'/wish'}><FaRegHeart size={'25px'} /></Link>
                        <p className='absolute -right-2 -top-1 h-4 w-4 rounded-full flex justify-center items-center bg-red-600 text-white font-bold'>{wishArr.length}</p>
                    </span>
                    <span className='relative cursor-pointer'>
                        <CiShoppingBasket size={'30px'} onClick={showCart}/>
                        <p className='absolute -right-2 top-0 h-4 w-4 rounded-full flex justify-center items-center bg-red-600 text-white font-bold'>{arr.length}</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
        <div className='w-[100%] flex justify-center xl:hidden'>
            <div className='w-[85%] py-7  flex justify-between'>
                <div className=''>
                    <img src={img} alt="" />
                </div>
                <div className='flex gap-x-4'>
                    <CiShoppingBasket size={'30px'} />
                    <FaBarsStaggered size={'30px'}/>
                </div>
            </div>
        </div>


        <div className={`h-[100vh] w-[100%] bg-black fixed top-0 left-0 bg-opacity-50 z-50 cursor-crosshair ${cart ? 'visible' : 'invisible'}`}>
            <div className='h-[100%] w-[23%] bg-white justify-self-end flex flex-col justify-between p-5 cursor-default'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-lg font-bold'>Shopping Cart</h1>
                    <span onClick={closeCart} className='text-4xl font-thin cursor-pointer'><HiMiniXMark /></span>
                </div>
                
                <div className='p-5 overflow-y-auto mt-2 h-[70%]'>
                    {arr.map((item, idx) => {
                        return (
                            <div key={idx} className='flex py-3'>
                                <img src={item.img} alt="" className='h-[50px] cursor-pointer' />
                                <div className='ml-6'>
                                    <h1 className='font-bold hover:text-blue-700 cursor-pointer'>{item.name}</h1>
                                    <p><span className='text-blue-700'>{item.price}</span> * {item.quantity}</p>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>

                <Link to={'/cart'} className='px-10 py-3 bg-black rounded text-white text-center font-bold'>View Cart</Link>
            </div>
        </div> 

    </>

  )
}

export default SecondRow


