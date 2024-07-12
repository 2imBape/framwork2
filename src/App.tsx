
import './App.css'
import ProductDetail from './pages/ProductDetail';
import { useRoutes } from 'react-router-dom';
import Admin from './pages/Admin';
import LayoutClient from './layouts/LayoutClient';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import { Login } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Product } from './types/Product';
import instance from './Apis/index.';
import ProductEdit from './pages/ProductEdit';


function App() {
  const [products,setProducts] = useState<Product[]>([])
  useEffect(() => {
    (async() => {
      const {data} = await instance.get(`/products`)
      setProducts(data)
    })()
  },[])

  const handleDel = async(id: number) => {
    const cf = confirm("Bạn có chắc chắn muốn xóa?")
    if (cf) {
      await instance.delete(`/products/${id}`)
      setProducts(products.filter((item) => (item.id !== id)))
      
    }
  }

  const routeConfig = [
    {
      path: "admin",
      element: <Admin onDel={handleDel} product={products}/>,
      children: [
        { path: "product/:id",
          element: <ProductEdit />
        }
      ]
    },
    {
      path: "/",
      element: <LayoutClient />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "product/:id", element: <ProductDetail /> },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ];
  const routes = useRoutes(routeConfig);

  
  return <main>{routes}</main>;
  
}

export default App
