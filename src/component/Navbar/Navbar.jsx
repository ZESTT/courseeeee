import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { UserContext } from '../../Context/Context'


export default function Navbar() {
  let {userlogin ,setuserlogin}=useContext(UserContext) 
let navigate= useNavigate()
  function logout() {
    localStorage.removeItem('userToken')
    setuserlogin(null)
    navigate('/login')

  }
  return (
    <>
    <nav className='bg-gray-100 static lg:fixed top-0 right-0 left-0 py-2'>
      <div className="container flex flex-col lg:flex-row mx-auto  justify-between ">
        <div className=' flex lg:flex-row flex-col'>
          <img src={logo} alt="" width={50} />
          <ul className=' flex lg:flex-row flex-col items-center'>
            {userlogin !==null?<>
          <li className='py-2'><NavLink className='mx-2 py-2 text-lg text-slate-950  font-light' to=''>Home</NavLink></li>
          <li className='py-2'><NavLink  className='mx-2 py-2 text-lg text-slate-950  font-light' to='about'>About</NavLink></li>
          <li className='py-2'><NavLink  className='mx-2 py-2 text-lg text-slate-950  font-light' to='cart'>Cart</NavLink></li>
          <li className='py-2'><NavLink  className='mx-2 py-2 text-lg text-slate-950  font-light' to='brands'>Brands</NavLink></li>
          <li className='py-2'><NavLink  className='mx-2 py-2 text-lg text-slate-950  font-light' to='products'>Products</NavLink></li>
            </>:null}

          </ul>

        </div>
        <div>
        <ul className=' flex lg:flex-row flex-col items-center' >
          {userlogin ==null?<>
            <li className='py-2'><NavLink className='mx-2 py-2 text-lg text-slate-950  font-light' to='login'>Login</NavLink></li>
            <li className='py-2'><NavLink  className='mx-2 py-2 text-lg text-slate-950  font-light' to='register'>Register</NavLink></li>
          </>:<li onClick={logout} className='py-2'><span  className='mx-2 py-2 text-lg text-slate-950  font-light cursor-pointer' to='logout'>Logout</span></li>

          }

            <li>
              <i className='fab mx-2 fa-tiktok'></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      
    </>
  )
}
