import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/Context';
export default function Login() {
let navigate = useNavigate();
let {setuserlogin} = useContext(UserContext)
const[appiError,setappiError]=useState('')
 function handleLogin(formvalues) {
  
   axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,formvalues)
   .then(
    (apiRespnse)=>{
      if (apiRespnse?.data?.message === 'success') {
        localStorage.setItem('userToken',apiRespnse.data.token)
        setuserlogin(apiRespnse.data.token)
        navigate('/')
      }
     }
   )
   .catch((apiRespnse)=>{
  setappiError(apiRespnse?.response?.data?.message)
   })   
 }

  let formik =useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    onSubmit:handleLogin
  })
  return (
    <>
   
      <div className="max-w-md mx-auto py-6">
        <h2 className='text-3xl font-bold mb-4 py-6 text-green-700'>Login Now</h2>
      <form  onSubmit={formik.handleSubmit}>
     
   
     <div className="relative z-0 w-full mb-5 group">
      <input type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-black dark:border-slate-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Enter Email Adress</label>
     </div>
   

     <div className="relative z-0 w-full mb-5 group">
      <input type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-black dark:border-slate-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Enter Your password</label>
     </div>
      

  <button type="submit" className="text-black bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>

</form>
      </div>
    </>
  )
}
