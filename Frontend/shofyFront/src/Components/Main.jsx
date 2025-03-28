import React from 'react'
import FirstRow from './FirstRow'
import SecondRow from './SecondRow'
import ThirdRow from './ThirdRow'
import Slider from './Slider'
import 'flowbite';
import FourthRow from './FourthRow'
import Products from './Products'
import CatProducts from './catProducts'


const Main = () => {
  return (
    <>
        <div className='w-[100%]'>
            <FirstRow />    
            <SecondRow />    
            <ThirdRow />
            <Slider />
            <FourthRow />
            <Products />
            <CatProducts/>
        </div>    
    </>
  )
}

export default Main