import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [visible, setvisible] = useState(false)
    const [token, setToken] = useState(true)
    const navigate = useNavigate()

  return (
    <div className='flex justify-between items-center py-4 border-b border-zinc-400'>
          <div className='flex items-center'>
                <img  onClick={()=> navigate("/")}  className='cursor-pointer object-cover w-16 h-10  ' src={assets.logo5} alt="" />
                <img  onClick={()=> navigate("/")}  className='cursor-pointer object-cover w-32 ' src={assets.logo6} alt="" />
          </div>
          <div className='md:flex gap-6 hidden font-semibold items-center'>
                <NavLink to={"/"}  className={(e)=>e.isActive ? "active":"not-active"} >HOME</NavLink>
                <NavLink to={"/doctors"} className={(e)=>e.isActive ? "active":"not-active"}>ALLDOCTORS</NavLink>
                <NavLink to={"/about"} className={(e)=>e.isActive ? "active":"not-active"}>ABOUT</NavLink>
                <NavLink to={"/contact"}  className={(e)=>e.isActive ? "active":"not-active"}>CONTACT</NavLink>
          </div>
          <div className='md:flex hidden items-center'>
                { token ? 
                  <div className='flex items-center group relative gap-2 cursor-pointer'>
                       <img className='w-8 h-8 rounded-full' src={assets.profile_pic} alt="" /> 
                       <img  className='w-2.5' src={assets.dropdown_icon} alt="" />
                       <div className="absolute top-0 right-0 text-base font-medium  hidden group-hover:block  text-gray-600 z-20  pt-14  ">
                              <div className='min-w-48 shadow-xl bg-slate-100 rounded flex flex-col gap-4 px-3 py-5'>
                                    <Link to={"/my-profile"} className="px-4  text-sm  hover:text-black text-slate-600">My Profile</Link>
                                    <Link to={"/my-appointments"} className="px-4  text-sm  hover:text-black text-slate-600">My Appointments</Link>
                                    <Link onClick={()=> setToken(false)}  className="px-4  text-sm  hover:text-black text-slate-600">Logout</Link>
                              </div>
                        </div>
                  </div> :
                <Link onClick={()=> prev=> setToken(!prev)} to={"/login"}><button className='bg-[#5F6FFF] px-4 py-1  sm:px-8 md:py-3 text-white rounded-full'>Create account</button> </Link>}
                
          </div>
          <div className='flex md:hidden'>
             <img onClick={()=> setvisible(prev => !prev)}  src="src/assets/menu_icon.svg" alt="" />
          </div>
          <div className={`absolute top-0 right-0 bottom-0 flex sm:hidden overflow-hidden bg-white transition-all duration-500 ${visible ? " w-full mx-0" : "w-0"} `}>
             <div className="flex flex-col w-full text-gray-600 ">
              <div onClick={() => setvisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                <img className="w-2 rotate-180" src={assets.dropdown_icon} alt="" />
                <p className="text-lg text-gray-600">Back</p>
              </div>
                <NavLink onClick={() => setvisible(false)} to={"/"} className={(e) => e.isActive ? "menu" : "not-menu"}>HOME</NavLink>
                <NavLink onClick={() => setvisible(false)} to={"/doctors"} className={(e) => e.isActive ? "menu" : "not-menu "}>DOCTORS</NavLink>
                <NavLink onClick={() => setvisible(false)} to={"/about"} className={(e) => e.isActive ? "menu" : "not-menu "}>ABOUT</NavLink>    
                <NavLink onClick={() => setvisible(false)} to={"/contact"} className={(e) => e.isActive ? "menu" : "not-menu"}>CONTACT</NavLink>
            </div>
         </div>
    </div>
  )
}

export default Navbar