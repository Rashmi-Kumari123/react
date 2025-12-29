import { React, useState } from 'react'
import { useFormik } from 'formik'

const Login = () => {
  // const [formData, setFormData] = useState({
  //   fullName : "",
  //   email : "",
  //   password : ""

  // })
  // const handleChange=(e)=>{
  //   const {value, name} = e.target;
  //   setFormData({...formData, [name]: value});  
  // }
  // const handleSubmit=(e)=>{
  //   e.preventDefault(); // form will reload automatically
  //   console.log("on submit", formData)
  // }
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: ""
    },
    onSubmit: values => {
      console.log("on submit", values);
    },
  });
  return (
    <div>
      <h1 className='font-bold text-2xl pb-6'>Login Form</h1>
      <form onSubmit={formik.handleSubmit} className='space-y-4'>
        <div><input className='border ps-4 py-4 rounded-md lg:w-[33%] w-full' type='text' placeholder='Enter your fullName' name='fullName' onChange={formik.handleChange} value={formik.values.fullName} /></div>
        <div><input className='border ps-4 py-4 rounded-md lg:w-[33%] w-full' type='text' placeholder='Enter your email' name='email' onChange={formik.handleChange} value={formik.values.email} /></div>
        <div><input className='border ps-4 py-4 rounded-md lg:w-[33%] w-full' type='password' placeholder='Enter your password' name='password' onChange={formik.handleChange} value={formik.values.password} /></div>
        <button type="submit" className='lg:w-[33%] bg-slate-300 py-3 rounded-md'>Login</button>
      </form>
    </div>
  )
}

export default Login