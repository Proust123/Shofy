import React from 'react'
import { FiTruck } from "react-icons/fi";

const FirstRow = () => {
  return (
    <div className='w-full bg-[rgb(1,15,28)] hidden justify-center sm:flex'>
        <div className='w-[85%] py-2 flex justify-between'>
            <div className='flex gap-x-2 justify-center items-center'>
                <FiTruck color='rgb(255,179,66)' size="20px"/>
                <h1 className='text-[rgb(183,187,190)] text-xs font-medium'>Free Express Shipping On Orders Above $570+</h1>
            </div>
            <div className='flex gap-x-1'>
                <div className='border-0'>
                    <select className='bg-[rgb(1,15,28)] w-[105px] border-0 text-white'>
                        <option className='border border-black bg-white text-black'>English</option>
                        <option className='border border-black bg-white text-black'>Spanish</option>
                        <option className='border border-black bg-white text-black'>Russian</option>
                        <option className='border border-black bg-white text-black'>Proteguese</option>
                    </select>
                </div>
                <div>
                    <select className='bg-[rgb(1,15,28)] border-0 text-white'>
                        <option className='border border-black bg-white text-black'>USD</option>
                        <option className='border border-black bg-white text-black'>EUR</option>
                        <option className='border border-black bg-white text-black'>GBP</option>
                        <option className='border border-black bg-white text-black'>KWD</option>
                        <option className='border border-black bg-white text-black'>CHF</option>
                    </select>
                </div>
                <div>
                    <select className='bg-[rgb(1,15,28)] w-[105px] border-0 text-white'>
                        <option className='border border-black bg-white text-black'>Setting</option>
                        <option className='border border-black bg-white text-black'>My Profile</option>
                        <option className='border border-black bg-white text-black'>Wishlist</option>
                        <option className='border border-black bg-white text-black'>Cart</option>
                        <option className='border border-black bg-white text-black'>Logout</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstRow