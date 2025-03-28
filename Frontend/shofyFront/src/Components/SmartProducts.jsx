import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import img2 from '../images/logo.svg';
import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { Slider } from 'antd'; // Assuming you're using Ant Design's Slider

const SmartProducts = () => {
  // const prodArr = useSelector((state) => state.allReducers.prodArr)
  const [arr, setArr] = useState([]);
  const [filteredPrice, setFilterPrice] = useState([]);
  const { category } = useParams();

  console.log(category);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4000/api/singleCategory/${category}`,
    );

    console.log(res);

    setArr(res.data);
    setFilterPrice(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  console.log(arr);

  // const smart = arr.filter((product) => product.option === "Smart Watch")

  const renderStars = (rating) => {
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
    return stars;
  };

  const [newArr, setNewArr] = useState([])

  useEffect(() => {
    fetchCategories();
  }, []);

const fetchCategories = async () => {
    const res = await axios.get('http://localhost:4000/api/allCategories');

    setNewArr(res.data);
};

  /////////////////////////// Range Price

  const [lowerBound, setLowerBound] = useState(0);
  const [upperBound, setUpperBound] = useState(2000);
  const [value, setValue] = useState([0, 2000]);

  const onSliderChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    setFilterPrice(
      arr.filter((e, i) => {
        return e.price >= value[0] && e.price <= value[1];
      }),
    );
  }, [value]);

  return (
    <>
      <div className='flex flex-col h-max'>
        <div className='py-4 pl-24 border shadow-md'>
          <Link to={'/'} className=''>
            <img src={img2} alt='' />
          </Link>
        </div>

        {/* Main Content */}

        <div className='flex w-[100%] h-max  py-20 pl-24'>
          <div className='w-[20%]'>
            <h1 className='text-3xl font-semibold'>Shop</h1>
            <div className='flex flex-col mt-12 gap-y-3'>
              <label className='text-xl font-semibold' htmlFor='price'>
                Price Filter
              </label>
              <div className='flex justify-between items-center'>
                <h2 className='text-gray-500'>0</h2>
                <h2 className='text-gray-500'>1199</h2>
              </div>

              <div>
                <Slider
                  range
                  allowCross={false}
                  value={value}
                  min={0}
                  max={2000}
                  onChange={onSliderChange}
                />
              </div>
              {/* <input type="range" min={0} max={1199} name="" id="price" /> */}
            </div>
            <div className='mt-5 bg-black w-[100%] z-10'>
              {newArr.map((item, idx) => {
                return (
                  <div className='h-[70px]  bg-white border-b-gray-200 border flex justify-center items-center '>
                    <Link
                      to={`/category/${item.name}`}
                      className='flex gap-x-5 items-center'
                    >
                      <img src={item.img} alt='' className='h-10' />
                      <h3 className='font-semibold text-gray-500'>{item.name}</h3>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>


          <div className='w-[70%]'>
            <div className='flex w-[100%] h-max py-20 pl-24'>
              {arr.length > 0 ? (
                <div className='grid grid-cols-3 gap-8'>
                  {filteredPrice &&
                    filteredPrice.map((product, index) => (
                      <div
                        key={index}
                        className='border p-4 rounded shadow-md hover:shadow-lg transition'
                      >
                        <img
                          src={product.img}
                          alt={product.name}
                          className='w-full h-48 object-cover'
                        />
                        <h2 className='mt-4 font-bold text-lg'>
                          {product.name}
                        </h2>
                        <p className='text-sm text-gray-600 flex items-center'>
                          Rating: &nbsp; {renderStars(product.rating)}
                        </p>
                        <p className='text-sm font-semibold'>
                          Price: ${product.price}
                        </p>
                      </div>
                    ))}
                </div>
              ) : (
                <h1>No products available in this category</h1>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SmartProducts;
