import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
<div className='mt-16 max-w-screen-md mx-auto'>
    <h1 className='text-gray-500 mb-8 text-center font-medium text-2xl'>CONTACT <span className='text-slate-900'>US</span></h1>
    <div className='flex md:flex-row flex-col gap-8 md:items-center items-start' >
         <div className='md:w-1/2'>
              <img src={assets.contact_image} alt="" />
         </div>
         <div className='flex  flex-col text-gray-500'>
                <h1 className='text-lg text-gray-700 font-semibold mb-6'>OUR OFFICE</h1>
                <p className='mb-6'>00000 Willms Station <br /> Suite 000, Washington, USA</p>
                <p className='mb-6'>Tel: (000) 000-0000Email: greatstackdev@gmail.com</p>
                <h1 className='text-lg text-gray-700 font-semibold mb-6'>CAREERS AT PRESCRIPTO</h1>
                <p className='text-sm'>Learn more about our teams and job openings</p>
                <button className='hover:bg-black w-fit mt-6 px-6 py-3 border border-gray-700  hover:text-white'>Explore Jobs</button>
         </div>
    </div>
</div>
  )
}

export default Contact