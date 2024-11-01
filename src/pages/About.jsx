import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
<div className='mt-16'>
    <h1 className='text-gray-500 mb-8 text-center font-medium text-2xl'>ABOUT <span className='text-slate-900'>US</span></h1>
    <div className='flex flex-col lg:flex-row lg:items-start items-center gap-12'>
         <div className='xl:w-[30%] w-full '>
            <img src={assets.about_image} alt="" />
         </div>
         <div className='xl:w-[70%] w-full flex flex-col gap-5 text-sm justify-center text-gray-600'>
              <p className='xl:w-[70%]'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
              <p className='xl:w-[70%]'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
                <h3 className='font-semibold text-black'>Our Vision</h3>
              <p className='xl:w-[70%]'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
          </div>
    </div>
    <div className='mt-8'>
          <h1 className='text-2xl'>WHY CHOOSE US</h1>
          <div className='border  mt-4   min-h-[28vh] flex md:flex-row flex-col rounded-md  '>
                <div className='md:w-1/3 p-12 transition-all duration-300 text-gray-600 hover:text-white hover:bg-[#5F6FFF] cursor-pointer border '>
                      <h2 className='font-semibold'>EFFICIENCY:</h2>
                      <p  className='mt-5  '>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                </div>
                <div className='md:w-1/3 p-12 transition-all duration-300  text-gray-600 hover:text-white   hover:bg-[#5F6FFF] cursor-pointer border '>
                      <h2 className='font-bold'>CONVENIENCE:</h2>
                      <p  className='mt-5 '>Access to a network of trusted healthcare professionals in your area.</p>
                </div>
                <div className='md:w-1/3 p-12 transition-all duration-300  text-gray-600 hover:text-white  hover:bg-[#5F6FFF] cursor-pointer border '>
                      <h2 className='font-semibold'>PERSONALIZATION:</h2>
                      <p  className='mt-5  '>Tailored recommendations and reminders to help you stay on top of your health.</p>
                </div>
          </div>
    </div>
</div>
  )
}

export default About