import  { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavProvider } from "../context/Navcontext";
import UserLayout from "./Layout/userLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";





const App: FC = () => {
  return(
    <BrowserRouter>
    <NavProvider>
  
    {/* ปัญหาที่พบคือ UserLayout ต้องอยู่ในรูปแบบนี้ <Route><Route/> และ <Route/> ทุกอย่างต้องอยู่ภายใน UserLayout */}
      <Routes>
        <Route path="/" element={<UserLayout/>}>
        <Route path="Home" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Cart" element={<Cart/>}/>
        </Route>
      </Routes>
      </NavProvider>
    </BrowserRouter>
  )
}

export default App