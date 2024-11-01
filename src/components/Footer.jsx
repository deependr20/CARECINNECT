import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-32  w-full  '>
        <div className='flex-col lg:flex-row lg:gap-0 gap-16 flex justify-between'>
            <div className='lg:w-[60%] w-full'>
                        <div className='flex items-center'>
                                <img  onClick={()=> navigate("/")}  className='cursor-pointer object-cover w-16 h-10  ' src={assets.logo5} alt="" />
                                <img  onClick={()=> navigate("/")}  className='cursor-pointer object-cover w-32 ' src={assets.logo6} alt="" />
                        </div>
                        <p className='lg:w-1/2  text-slate-700 mt-4'>Our team is dedicated to connecting you with the best specialists in healthcare. Book appointments, consult with trusted doctors, and get the care you deserve—right at your fingertips. We're here to support your health journey.</p>
                </div>
                <div className='lg:w-[20%]'>
                        <h1 className='font-semibold text-lg'>COMPANY</h1>
                        <div className='flex flex-col mt-4 gap-3 text-slate-700 '>
                            <span>HOME</span>
                            <span>ABOUT US</span>
                            <span>DELIVERY</span>
                            <span>PRIVACY POLICY</span>
                        </div>
                </div>
                <div className='lg:w-[20%] '>
                        <h1 className='font-semibold text-lg '>GET IN TOUCH</h1>
                        <div className='flex flex-col text-slate-700  mt-4 gap-3'>
                            <p>+91 9174204019</p>
                            <p>satyampatelbankhedi@gmail.com</p>
                        </div>
                </div>
        </div>
        <div className='flex py-6 items-center justify-center flex-col gap-5'>
                <hr  className='w-full h-[1px] bg-slate-300'/>
                <p className='text-center  text-slate-800 font-semibold text-sm'>Copyright 2024 @ Deependra.dev - All Right Reserved..</p>
        </div>
        
    </div>
  )
}

export default Footer