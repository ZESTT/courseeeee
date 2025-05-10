import axios from 'axios';
import { useFormik, validateYupSchema, yupToFormErrors } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { UserContext } from '../../Context/Context';


export default function Register() {
let navigate = useNavigate();
let {setuserlogin} = useContext(UserContext)
let yu =Yup.object().shape(
  {
    name:Yup.string().min(3,'name atleast 3').max(10,'name maxlenght 10').required('Name is required'),
    phone:Yup.string().matches(/^01[0-2,5]{1}[0-9]{8}$/,'phone number must be on egypt').required('phone number is required'),
    email:Yup.string().email('e-mail is invalid').required('email  is required'),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/,'password must be start with uppercase').required('password is required'),//Ahmed
    rePassword:Yup.string().oneOf([Yup.ref('password')],'password and repassword didnot match').required('repassword  is required'),//mohamed
  }
)
const[appiError,setappiError]=useState('')

 function handleRegister(formvalues) {
   axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,formvalues)
   .then((apiRespnse)=>{
    if (apiRespnse?.data?.message === 'success') {
      localStorage.setItem('userToken',apiRespnse.data.token)
      setuserlogin(apiRespnse.data.token)
      navigate('/login')
    }
   }
  )
   .catch((apiRespnse)=>{
    //            1           2      3       4
  setappiError(apiRespnse?.response?.data?.message)
   })
 
   
  
 }

  let formik =useFormik({
    initialValues:{
      name:'',
      phone:'',
      email:'',
      password:'',
      rePassword:''
    },
    validationSchema:yu,
    onSubmit:handleRegister
  })
  return (
    <>
   
    <div className="py-2 max-w-xl mx-auto">
   {appiError? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">{appiError}</div>:null} 
    </div>
      <div className="max-w-md mx-auto py-6">
        <h2 className='text-3xl font-bold mb-4 py-6 text-green-700'>Register Now</h2>
      <form  onSubmit={formik.handleSubmit}>
       <div className="relative z-0 w-full mb-5 group">
      <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-black dark:border-slate-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Name</label>
     </div>
      {formik.errors.name && formik.touched.name?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">{formik.errors.name}</div>:null}


     <div className="relative z-0 w-full mb-5 group">
      <input type="tel" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-black dark:border-slate-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Enter Phone Number</label>
     </div>
     {formik.errors.phone && formik.touched.phone?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">{formik.errors.phone}</div>:null}

    
     <div className="relative z-0 w-full mb-5 group">
      <input type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-black dark:border-slate-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Enter Email Adress</label>
     </div>
     {formik.errors.email  && formik.touched.email?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">{formik.errors.email}</div>:null}


     <div className="relative z-0 w-full mb-5 group">
      <input type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-black dark:border-slate-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Enter Your password</label>
     </div>
     {formik.errors.password  && formik.touched.password?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">{formik.errors.password}</div>:null}


     <div className="relative z-0 w-full mb-5 group">
      <input type="password" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-black dark:border-slate-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> rePassword</label>
     </div>

     {formik.errors.rePassword  && formik.touched.rePassword?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">{formik.errors.rePassword}</div>:null}


  <button type="submit" className="text-black bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>

</form>
      </div>
    </>
  )
}
