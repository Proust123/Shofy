import React, {useState} from 'react'
import img from '../images/logo.svg'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { emptyLogin, updateLoginData } from '../redux/reduxSlice'
import axios from 'axios'
import toast from 'react-hot-toast'



const Login = () => {

    const [token, setToken] = useState(localStorage.getItem('token') || '')
    const [user, setUser] = useState(localStorage.getItem('user') || '')
    console.log(user);
        

    const navigate = useNavigate()
    const login = useSelector((state) => state.allReducers.loginData)
    const dispatch = useDispatch()

    function handleChange(e) {
        const {name, value} = e.target

        dispatch(updateLoginData({[name] : value}))
    }

    async function log() {
        const response = await axios.post('http://localhost:4000/api/login', login)

        if(response.data.success) {
            toast.success(response.data.message)
            localStorage.setItem('token', response.data.token)
            // localStorage.setItem('user', JSON.stringify(response.data.user))
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setTimeout(() => {
                navigate('/')
                // navigate('/super')
            }, 100)
        }else{
            toast.error(response.data.message)
        }

        console.log(response);
        

        dispatch(emptyLogin())
    }

    
    
      async function fetchData () {
        const res = await axios.get('http://localhost:4000/api/allUsers', {
          headers : {
            Authorization : `Bearer ${token}`
          }
        })
    
        console.log(res.data);
        
      }

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
                        <h1 className='text-2xl font-semibold'>Login</h1>
                    </div>
                    <div>
                        <fieldset className='border-2 w-64 sm:w-80 pl-5'>
                            <legend>Your Email</legend>
                            <input  name="email" value={login.email} onChange={handleChange} className="h-6 border-0 focus:ring-0" type="email" id="Email" placeholder='shofy@mail.com'/>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className='border-2 w-64 sm:w-80 pl-5'>
                            <legend>Password</legend>
                            <input name="password" value={login.password} onChange={handleChange} className="h-6 border-0 focus:ring-0" type="password" id="Password" placeholder='password'/>
                        </fieldset>
                    </div>
                    <button onClick={log} className='w-64 sm:w-80 bg-black flex justify-center items-center text-white font-medium rounded py-2'>Log in</button>
                    <h1>Don't have an Account <Link to={'/signup'} className='text-blue-400 font-semibold'>Sign up</Link></h1>
                </div>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default Login