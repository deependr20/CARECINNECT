import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const [account, setAccount] = useState(true)
  const navigate = useNavigate()  
 const [form, setform] = useState({name: "",email: "", password: ""})

  const handleChange = (e) => {
    setform({...form , [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    toast.success("Account created successsfully")
    setAccount(false)
    setform({name:"" , email:"", password: ""})
  }

  return (
    <div className='flex items-center w-full h-[90vh] justify-center'>
        <div className='border rounded-lg min-h-[50vh] shadow-lg p-7 w-[25rem]'>
            <h1 className='text-2xl font-semibold text-gray-600 '>{account ? 'Create Account' : 'Login'}</h1>
            <p className='mt-3 text-gray-500'>{account ? 'Please sign up to book appointment' : 'Please log in to book appointment'}</p>
            <form onSubmit={handleSubmit}>
                 {account && 
                      <div className='mt-3'>
                      <p className='text-gray-500 mb-1'>Full Name</p>
                      <input name='name' value={form.name} onChange={handleChange} className='border w-full p-2 rounded-md'  type='text' />
                 </div>
                 }
                 <div className='mt-3'>
                      <p className='text-gray-500 mb-1'>Email</p>
                      <input name='email' value={form.email} onChange={handleChange} className='border w-full p-2 rounded-md'  type={account ? "text" :'email'} />
                 </div>
                 <div className='mt-3'>
                      <p className='text-gray-500 mb-1'>Password</p>
                      <input name='password' value={form.password} onChange={handleChange} className='border w-full p-2 rounded-md '  type='Password' />
                 </div>
                 <button onClick={()=>{account === false && navigate("/")} }  className='w-full bg-[#5F6FFF] mt-5 py-3  text-sm text-white rounded-md'>{account ? "Create Account" : "Login"}</button>
                 <div className='flex gap-2 mt-3 text-sm items-center'>
                      <p className='text-gray-500' >{account ?  "Already have an account? " : "Create an new account?"}</p>
                      <a className='underline text-blue-500 cursor-pointer' onClick={()=> setAccount(prev => !prev)} >{account ? "Login here" : "Click here"}</a>
                 </div>
            </form>
        </div>
    </div>
  )
}

export default Login