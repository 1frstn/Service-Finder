import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer"
import Header from "./components/header"
import MainPage from "./pages/main-page"
import {useDispatch} from 'react-redux'
import useApi from './hooks/useApi';
import { setCategories } from './redux/categoriesSlice';
import { useEffect } from "react"
import CategoryDetailPage from "./pages/category-detail-page"
import ServiceDetailPage from "./pages/service-detail-page"
import BlogDetailPage from "./pages/blog-detail-page"
import LoginPage from "./pages/login-page"

function App() {
  const api = useApi();
  const dispatch = useDispatch();

  useEffect(()=>{

    (async() => {
        /* immediate call async func */
        const categoryRes = await api.get('public/categories/listMainCategories');
        console.log(">> RESP ",categoryRes.data);
        dispatch(setCategories(categoryRes.data.data))
        /* 
        const jobRes = await api.get('public/categories/latestJobs?status=pending');
        const blogRes = await api.get('public/categories/list?status=active&length=6'); */
    
    })()

},[])

  return (
    <div className="bg-dark">
      <Header/>
      <Routes>
        <Route index element={<MainPage/>} />
        <Route path="category/:slug" element={<CategoryDetailPage/>} />
        <Route path="service/:slug" element={<ServiceDetailPage/>} />
        <Route path="blog/:slug" element={<BlogDetailPage/>} />
        <Route path="login/" element={<LoginPage/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
