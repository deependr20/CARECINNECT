import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#5F6FFF] rounded-lg my-16 md:min-h-auto min-h-[45vh]  lg:mx-0 md:px-16 px-5 pt-4 items-center  flex justify-between'>
            <div className='w-[70%]'> 
                    <h1 className='lg:text-5xl md:text-3xl sm:text-2xl text-xl  mb-9 font-bold text-white lg:leading-[60px]'>Book Appointment <br /> With 100+ Trusted Doctors</h1>
                    <button onClick={()=>navigate("/login")} className=' text-slate-500 font-medium hover:scale-110 transition-all duration-500 bg-white md:px-8  md:py-3 px-4 py-2 rounded-full'>Create account</button>
            </div>
            <div className='md:w-[30%]'>
                     <img  className='w-72' src={assets.appointment_img} alt="" />
            </div>
    </div>
  )
}

export default Banner