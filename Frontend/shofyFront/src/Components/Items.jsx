import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';


const Items = () => {
  // const arr = useSelector((state) => state.allReducers.prodArr);

  const [arr, setArr] = useState([])

  const fetchData = async () => {
    const res = await axios.get('http://localhost:4000/api/allProds')

    setArr(res.data)
  }

  console.log(arr);
  
  async function deleteItem(id) {
    const res = await axios.delete(`http://localhost:4000/api/deleteProd/${id}`)

    if(res.data.success) {
      toast.success(res.data.message)
      fetchData()
    }else{
      toast.error(res.data.message)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    
      <>
        <div className='flex flex-col gap-3 justify-center items-center p-4 h-[80%] rounded w-full bg-yellow-400'>
          {arr.map((item, idx) => {
            return (
              
                <div key={idx} className='flex bg-gray-950 px-5 py-2 rounded w-full'>
                  <div className='flex items-center w-[15%]'>
                    <img className='h-[50px] w-[50px]' src={item.img} alt='' />
                  </div>
                  <div className='flex items-center w-[40%]'>
                    <h2 className='text-gray-400 text-lg'>{item.name}</h2>
                  </div>
                  <div className='flex items-center w-[15%]'>
                    <h2 className='text-gray-400 text-lg'>$ {item.price}</h2>
                  </div>
                  <div className='w-[30%] flex gap-2'>
                    <button
                      className='text-red-400'
                      onClick={() => deleteItem(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              
            );
          })}
        </div>

      </>
    
  );
};

export default Items;