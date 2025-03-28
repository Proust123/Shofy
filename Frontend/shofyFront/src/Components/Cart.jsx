import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import img2 from '../images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateDecrement,
  updateIncrement,
  updateRemove,
} from '../redux/reduxSlice';
import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {
  const items = useSelector((state) => state.allReducers.cartItems);
  console.log(items);
  const dispatch = useDispatch();

  function increment(id) {
    dispatch(updateIncrement(id));
  }

  function decrement(id) {
    dispatch(updateDecrement(id));
  }

  function remove(id) {
    dispatch(updateRemove(id));
  }

  const makePayment = async () => {
    const stripe = await loadStripe(
      'pk_test_51Qm8uCArW8ZR7one2Qu8PseaU34rFSIfiDy70hrS5jH9LPgLn26KUSzKFS6pFS9BSDo0ZmhrfN7Srevh21I9225i00TE9vW7Yh',
    );

    const body = {
      products: items,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await fetch(
      'http://localhost:4000/api/create-checkout-session',
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      },
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

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
            <h1 className='text-4xl font-semibold'>Shopping Cart</h1>
            <div className='p-3 rounded w-full bg-[rgb(241,243,244)] mt-12 flex justify-between items-center'>
              <div className='w-[50%]'>
                <h1 className='font-bold ml-5'>Products</h1>
              </div>
              <div className='w-[50%] flex justify-between items-center'>
                <div className='w-[20%]'>
                  <h2 className='font-bold'>Price</h2>
                </div>
                <div className='w-[80%]'>
                  <h2 className='font-bold'>Quantity</h2>
                </div>
              </div>
            </div>

            {items.length > 0 ? (
              items.map((item, idx) => {
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
                          <button
                            onClick={() => decrement(idx)}
                            className='text-2xl font-semibold'
                          >
                            -
                          </button>
                          <p className='text-lg'>{item.quantity}</p>
                          <button
                            onClick={() => increment(idx)}
                            className='text-2xl font-semibold'
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => remove(item._id)}
                          className='text-md text-gray-600 font-semibold ml-36'
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className='flex justify-center items-center mt-9'>
                <h1 className='text-lg font-bold'>No Items To Show</h1>
              </div>
            )}

            {items.length > 0 && (
              <div className='flex justify-evenly mt-5'>
                <p className='font-bold'>Subtotal:</p>
                <p className='font-semibold'>
                  $
                  {items.reduce(
                    (acc, curr) => acc + curr.price * curr.quantity,
                    0,
                  )}
                </p>
              </div>
            )}
            {items.length > 0 && (
              <div className='flex justify-center items-center mt-5'>
                <button
                  className='h-12 w-[50%] bg-black text-white rounded font-bold'
                  onClick={makePayment}
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Cart;

// app.post("/api/create-checkout-session",async(req,res)=>{


// })
