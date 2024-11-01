import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div id='speciality' className='  pt-16 '>
          <div className='text-center'>
                <h1 className='text-3xl pb-4 font-semibold'>Find by Speciality</h1>
                <p className='md:w-[35%] mx-auto text-sm font-medium text-slate-500' >Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
          </div>
          <div className='flex  gap-3 w-full overflow-scroll sm:justify-center pt-10' >
                {specialityData.map((p,i)=>
                        <Link onClick={()=> scrollTo(0,0 )} to={`/doctors/${p.speciality}`} key={i} className=' flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:-translate-y-3 transition-all ease-in-out duration-[600ms] '>
                              <img className='w-16  sm:w-24 mb-2 ' src={p.image} alt="" />
                               <p className=''>{p.speciality}</p>
                        </Link>
                )}
          </div>
        
    </div>
  )
}

export default Speciality