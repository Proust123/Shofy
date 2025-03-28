import React from 'react'
import img from '../images/logo.svg'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { emptySignupData, updateSignupData } from '../redux/reduxSlice'
import axios from 'axios'
import toast from 'react-hot-toast'

const Signup = () => {

    const signup = useSelector((state) => state.allReducers.signupData)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleChange(e) {
        const {name, value} = e.target

        dispatch(updateSignupData({[name] : value}))
    }

    async function submit() {
        const response = await axios.post('http://localhost:4000/api/signup', signup)

        if(response.data.success) {
            toast.success(response.data.message)
            navigate('/login')
        }else{
            toast.error(response.data.message)
        }

        fetchData()

        dispatch(emptySignupData())
    }

    // async function fetchData() {
    //     const res = await axios.get('http://localhost:4000/api/allUsers')
    // }


  return (
    <>
        <div>
            <div className='py-4 pl-24 border shadow-md'>
                <Link to={'/'} className=''>
                    <img src={img} alt="" />
                </Link >
            </div>
            <div className='p-6 flex justify-center items-center'>
                <div className='shadow-xl h-[70vh] w-96 py-8 flex flex-col justify-between items-center'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Signup</h1>
                    </div>
                    <div>
                        <fieldset className='border-2 w-64 sm:w-80 pl-5'>
                            <legend>Your Email</legend>
                            <input className="h-6 border-0 focus:ring-0" type="email" name="email" value={signup.email} onChange={handleChange} id="Email" placeholder='shofy@mail.com'/>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className='border-2 w-64 sm:w-80 pl-5'>
                            <legend>Password</legend>
                            <input className="h-6 border-0 focus:ring-0" type="password" name="password" value={signup.password} onChange={handleChange} id="Password" placeholder='password'/>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className='border-2 w-64 sm:w-80 pl-5'>
                            <legend>Name</legend>
                            <input className="h-6 border-0 focus:ring-0" type="text" name="name" value={signup.name} onChange={handleChange} id="Name" placeholder='Timothee'/>
                        </fieldset>
                    </div>
                    <button className='w-64 sm:w-80 bg-black flex justify-center items-center text-white font-medium rounded py-2' onClick={submit}>Sign up</button>
                </div>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default Signup