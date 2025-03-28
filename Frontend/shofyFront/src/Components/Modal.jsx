import React, {useState} from 'react';
import { GiSkullCrossedBones } from 'react-icons/gi';

const Modal = () => {

    

    function hideModal() {
        setIsModal(false)
    }

  return (
    <>
      <div className='h-[100vh] w-[100%] bg-black absolute left-0 top-0 opacity-80 flex justify-center items-center z-50'>
        <div className='h-[80%] w-[30%] bg-white rounded flex flex-col justify-between p-5 z-50'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>ADD INFORMATION</h1>
            <GiSkullCrossedBones onClick={hideModal}/>
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='image'>Image URL:</label>
            <input
              className='border border-black bg-black rounded h-[35px]'
              type='text'
              id='image'
              name=''
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='name'>Product Name:</label>
            <input
              className='border border-black bg-white rounded h-[35px]'
              type='text'
              id='name'
              name=' '
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='price'>Product Price:</label>
            <input
              className='border border-black bg-white rounded h-[35px]'
              type='text'
              id='price'
              name=''
            />
          </div>
          <button className='h-[35px] w-[120px] rounded bg-sky-600 text-white font-bold'>
            Add Product
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
