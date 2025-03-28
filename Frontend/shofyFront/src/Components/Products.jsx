import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import {  updateCartItems, updateWishItems } from '../redux/reduxSlice';

const Products = () => {

  
  const dispatch = useDispatch()

  const [arr, setArr] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:4000/api/allProds');

    setArr(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function renderStars(rating) {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? 'text-yellow-400' : 'text-gray-400'}
        >
          <FaStar />
        </span>,
      );
    }
    return stars
  }

  function addToCart(item) {
    dispatch(updateCartItems({...item, quantity : 1}))
  }
  
  const addToWish = (item) => {
    dispatch(updateWishItems({ ...item }));
  };

  return (
    <>
      <div className='flex flex-col items-center pt-4'>
        
        <h1 className='text-[35px] sm:text-[40px] font-bold mb-3'>Trending Products</h1>
        <div className='w-[85%] p-7 border-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {arr.map((item, idx) => {
            return (
              <div key={idx} className='relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'>
                <a
                  className='relative mx-3 mt-3 flex h-60 justify-center overflow-hidden rounded-xl'
                  href='#'
                >
                  <img
                    className='object-cover'
                    src={item.img}
                    alt='product image'
                  />
                </a>
                <div className='mt-4 px-5 pb-5'>
                  <a href='#'>
                    <h5 className='text-xl tracking-tight text-slate-900'>
                      {item.name}
                    </h5>
                  </a>
                  <div className='mt-2 mb-5 flex items-center justify-between'>
                    <p>
                      <span className='text-3xl font-bold text-slate-900'>
                        $ {item.price}
                      </span>
                    </p>
                    <div className='flex items-center'>
                    <p className="text-sm text-gray-600 flex items-center">{renderStars(item.rating)}</p>
                      <span className='mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold'>
                        {item.rating}
                      </span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <button 
                      onClick={() => addToWish(item)}
                      className='flex items-center justify-center gap-x-2 rounded-md bg-slate-900 px-5 py-2.5 text-center text-md font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300'>
                      <FaRegHeart />
                      Wishlist
                    </button>
                  <button
                      onClick={() => addToCart(item)}
                    className='flex items-center justify-center gap-x-2 rounded-md bg-slate-900 px-9 py-2.5 text-center text-md font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
                  >
                    <FaCartShopping />
                    Cart
                  </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
