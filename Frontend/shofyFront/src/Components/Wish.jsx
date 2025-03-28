import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import img2 from '../images/logo.svg'
import { useDispatch, useSelector } from 'react-redux';
import { updateWishRemove, updateCartItems } from '../redux/reduxSlice';

const Wish = () => {

  const items = useSelector((state) => state.allReducers.wishItems)
  const dispatch = useDispatch()

  console.log(items);
  
  function addToCart(item) {
    dispatch(updateCartItems({...item, quantity : 1}))
  }

  function wishRemove(id) {
    dispatch(updateWishRemove(id))
  }

  return (
    <>
      <div className='flex flex-col'>
        <div className='py-4 pl-24 border shadow-md'>
          <Link to={'/'} className=''>
            <img src={img2} alt='' />
          </Link>
        </div>

        <div className='py-20 flex flex-col justify-center items-center'>
          <div className='w-[85%]'>
            <h1 className='text-4xl font-semibold'>WishList</h1>
            <div className='p-3 rounded w-full bg-[rgb(241,243,244)] mt-12 flex justify-between items-center'>
              <div className='w-[50%]'>
                <h1 className='font-bold ml-5'>Products</h1>
              </div>
              <div className='w-[50%] flex justify-between items-center'>
                <div className='w-[20%]'>
                  <h2 className='font-bold'>Price</h2>
                </div>
                <div className='w-[80%]'>
                  <h2 className='font-bold'>Add Cart</h2>
                </div>
              </div>
            </div>

            {items.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className='p-3 mt-5 flex items-center justify-between'
                >
                  <div className='w-[50%] flex items-center ml-5 '>
                    <img src={item.img} alt='' className='h-[80px]' />
                    <p className='ml-10 text-lg font-semibold'>
                      {item.name.toUpperCase()}
                    </p>
                  </div>
                  <div className='w-[50%] flex items-center justify-between'>
                    <div className='w-[20%]'>
                      <p className='text-lg font-semibold -ml-3'>
                        ${item.price}
                      </p>
                    </div>
                    <div className='w-[80%] flex'>
                      <div className='h-9 w-28 rounded-full border-2 -ml-3 p-2 flex justify-between items-center'>
                        <button onClick={() => addToCart(item)}
                          className='text-sm font-bold'
                        >
                          Add To Cart
                        </button>
                      </div>
                      <button
                        onClick={() => wishRemove(item._id)}
                        className='text-md text-gray-600 font-semibold ml-36'
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Wish;
