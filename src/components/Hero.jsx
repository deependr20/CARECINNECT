import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='bg-[#5F6FFF] mt-5 md:px-16 px-8 pt-16  rounded-md flex md:flex-row flex-col items-center  '>
           <div className='flex  flex-col md:w-1/2 w-full'>
                 <h1 className='text-white md:text-4xl lg:text-5xl text-3xl md:leading-[40px] lg:leading-[60px] font-bold'>Book Appointment With Trusted Doctors</h1>
                 <div className='flex my-4 md:flex-row flex-col items-center gap-4'>
                    <img src='src/assets/group_profiles.png' alt="" />
                    <p className='text-white '>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                 </div>
                <div className='bg-white w-fit mt-1  mx-auto md:mx-0 px-8 text-sm py-3 rounded-full'>
                     <a className='text-gray-500 font-medium' href='#speciality'>Book appointments</a>
                </div>
           </div>
           <div className='md:w-1/2 w-full'>
                <img className='' src={assets.header_img} alt="" />
           </div>
    </div>
  )
}

export default Hero