import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './component/Home/Home'
import Layout from './component/Layout/Layout'
import About from './component/About/About'
import Brands from './component/Brands/Brands'
import Cart from './component/Cart/Cart'
import Categories from './component/Categories/Categories'
import Login from './component/Login/Login'
import Products from './component/Products/Products'
import Register from './component/Register/Register'
import Notfound from './component/Notfound/Notfound'
import CounterContextProvider from './Context/Context'
import ProtectedRouter from './component/ProtectedRouter/ProtectedRouter'
import ProductDeatails from './component/ProductDeatails/ProductDeatails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

let query = new QueryClient();
function App() {
let x = createBrowserRouter([
    {path:'', element:<Layout/>,children:[
    {index:true,element:<ProtectedRouter><Home/></ProtectedRouter> },
    {path:'about',element: <ProtectedRouter><About/></ProtectedRouter> },
    {path:'brands',element: <ProtectedRouter> <Brands/></ProtectedRouter>},
    {path:'cart',element:<ProtectedRouter> <Cart/></ProtectedRouter>},
    {path:'productdeatails/:id',element:<ProtectedRouter> <ProductDeatails/></ProtectedRouter>},
    {path:'categories',element:<ProtectedRouter><Categories/></ProtectedRouter> },
    {path:'login',element:<Login/>},
    {path:'products',element:<ProtectedRouter> <Products/></ProtectedRouter>},
    {path:'register',element:<Register/>},
    {path:'*',element:<Notfound/>},
  ]}
])
  return <QueryClientProvider client={query}>
    <CounterContextProvider>
    <RouterProvider router={x}></RouterProvider>
  </CounterContextProvider>
  </QueryClientProvider>
}

export default App


