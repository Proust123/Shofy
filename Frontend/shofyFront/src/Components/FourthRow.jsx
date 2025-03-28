import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const FourthRow = () => {
  // const prodArr = useSelector((state) => state.allReducers.prodArr)
  const [arr, setArr] = useState([]);
  const [newArr, setNewArr] = useState([]);
  console.log(newArr);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:4000/api/allProds');

    setArr(res.data);
  };

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await axios.get('http://localhost:4000/api/allCategories');

    setNewArr(res.data);
  };



  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[85%] p-4 mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5'>
          {newArr.map((item, idx) => {
            return (
              <div className='flex flex-col items-center gap-y-4 group'>
                <Link
                  to={`/category/${item.name}`}
                  className='h-[150px] w-[150px] flex justify-center items-center rounded-full bg-[rgb(230,242,255)] '
                >
                  <img
                    src={item.img}
                    alt=''
                    className='group-hover:scale-110 duration-500 cursor-pointer'
                  />
                </Link>
                <h3 className='text-xl font-medium mt-7 cursor-pointer hover:text-[rgb(9,137,255)] duration-500'>
                  {item.name}
                </h3>
                <p>{item?.products.length} Products</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FourthRow;
