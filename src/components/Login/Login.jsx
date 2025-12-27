import { React, useState } from 'react'

const Login = () => {
  const [fullName, setFullName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const handleChange=(e)=>{
    const {value} = e.target
    console.log("on change", value);
    setFullName(value) 
  }
  const handleSubmit=(e)=>{
    e.preventDefault(); // form will reload automatically
    const formData = {fullName, email, password}
    console.log("on submit", formData)
  }
  return (
    <div>
      <h1 className='font-bold text-2xl pb-6'>Login Form</h1>
      <form className='space-y-4'>
        <div><input className='border ps-4 py-4 rounded-md lg:w-[33%] w-full' type='text' placeholder='Enter your fullName' name='fullName' onChange={handleChange}/></div>
      <div><input className='border ps-4 py-4 rounded-md lg:w-[33%] w-full' type='text' placeholder='Enter your email' name='Email' onChange={(e)=>setEmail(e.target.value)}/></div>
      <div><input className='border ps-4 py-4 rounded-md lg:w-[33%] w-full' type='text' placeholder='Enter your password' name='password'onChange={(e)=>setPassword(e.target.value)}/></div>
      <button onClick = {handleSubmit}className='lg:w-[33%] bg-slate-300 py-3 rounded-md'>Login</button>
      </form>
      

    </div>
  )
}

export default Login