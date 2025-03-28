import React, { useEffect, useState } from 'react';
import img from '../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaVimeoV } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategoryInputs } from '../redux/reduxSlice';
import toast from 'react-hot-toast';
import axios from 'axios';
import Categories from './Categories';


const AddCategory = () => {
    const categoryInputs = useSelector((state) => state.allReducers.categoryInputs)
    const dispatch = useDispatch()
    const navigate = useNavigate()

  const [modal, setModal] = useState(false);

  function showModal() {
    setModal(true);
  }

  function hideModal() {
    setModal(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    dispatch(updateCategoryInputs({ [name]: value }));
  }

  async function submit() {
    const res = await axios.post('http://localhost:4000/api/addCategory', categoryInputs)

    if(res.data.success) {
      toast.success(res.data.message)
    }else{
      toast.error(res.data.message)
    }

    fetchData()
    hideModal()
  }

  const fetchData = async () => {
    const res = await axios.get('http://localhost:4000/api/allCategories')

    console.log(res.data);
    
  }

  useEffect(() => {
    fetchData()
  }, [])

  function logout() {
    navigate('/login')
  }

  return (
    <>
      <>
        <div className='h-[100vh] w-100% flex flex-col'>
          <nav className='h-[10%] w-full border px-10 flex justify-between items-center'>
            <Link to={'/'} className='w-[25%] '>
              <img src={img} alt='' />
            </Link>
            <div className='flex items-center gap-x-3'>
              <h1 className='font-bold text-lg'>Admin</h1>
              <div
                  onClick={logout}
                className='rounded px-4 py-2 bg-[rgb(9,137,255)] text-white font-semibold cursor-pointer'
              >
                Logout
              </div>
            </div>
          </nav>
          <div className='h-[90%] w-full flex'>
            <div className='w-[15%] h-[100%] sticky shadow-xl flex justify-center items-center'>
              <div className='h-[70%] w-[80%] flex flex-col justify-between items-center'>
                <div className='w-[100%] flex justify-center flex-col '>
                  <Link to={'/'} className='font-bold'>
                    Home
                  </Link>
                  <Link
                    to={'/addCategory'}
                    className='flex items-center mt-5 font-bold justify-between text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  >
                    Categories
                  </Link>
                </div>
                <div className='flex mt-6 space-x-4'>
                  <a
                    href='#'
                    className='p-2 bg-gray-300 text-gray-600 rounded hover:text-white hover:bg-[rgb(9,137,255)]'
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href='#'
                    className='p-2 bg-gray-300 text-gray-600 rounded hover:text-white hover:bg-[rgb(9,137,255)]'
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href='#'
                    className='p-2 bg-gray-300 text-gray-600 rounded hover:text-white hover:bg-[rgb(9,137,255)]'
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href='#'
                    className='p-2 bg-gray-300 text-gray-600 rounded hover:text-white hover:bg-[rgb(9,137,255)]'
                  >
                    <FaVimeoV />
                  </a>
                </div>
              </div>
            </div>
            <div className='w-[85%] h-[100%] px-10'>
              <div className='w-full  mt-[90px] flex flex-col'>
                <div className='flex justify-between items-center'>
                  <h1 className='text-base font-bold'>Categories</h1>
                  <button
                    className='px-3 py-2 font-bold bg-[rgb(9,137,255)] text-white rounded'
                    onClick={showModal}
                  >
                    Add Category
                  </button>
                </div>

                <div
                  className={`absolute h-[100vh] w-full bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center ${
                    modal ? 'visible' : 'invisible'
                  }`}
                >
                  <div className='h-[80%] w-[30%] bg-white rounded flex flex-col justify-around p-4'>
                    <div className='flex justify-between items-center'>
                      <h1 className='text-2xl font-bold'>Add Information</h1>
                      <button
                        className='text-xl font-semibold'
                        onClick={hideModal}
                      >
                        X
                      </button>
                    </div>
                    <div className='flex flex-col gap-y-9'>
                      <div>
                        <input
                          className=' w-full border border-gray-300 rounded pl-3'
                          type='text'
                          name='img'
                          // value={}
                          id=''
                          placeholder='image'
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <input
                          className=' w-full border border-gray-300 rounded pl-3'
                          type='text'
                          name='name'
                          //   value={}
                          id=''
                          placeholder='name'
                            onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <button className=' w-[80px] bg-cyan-500 rounded text-white font-semibold' onClick={submit}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>

                <div className='border-2  w-full mt-5'>
                  <Categories />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AddCategory;
