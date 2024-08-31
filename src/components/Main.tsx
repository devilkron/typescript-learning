import  { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavProvider } from "../context/Navcontext";
import UserLayout from "./Layout/userLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Resetpwd from "./pages/Resetpwd";

const App: FC = () => {
  return(
    <BrowserRouter>
    <NavProvider>
  
    {/* ปัญหาที่พบคือ UserLayout ต้องอยู่ในรูปแบบนี้ <Route><Route/> และ <Route/> ทุกอย่างต้องอยู่ภายใน UserLayout */}
      <Routes>
        <Route path="/" element={<UserLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
        <Route path="About" element={<About/>}/>
        <Route path="Cart" element={<Cart/>}/>
        <Route path="Resetpwd" element={<Resetpwd/>}/>
        </Route>
      </Routes>
      </NavProvider>
    </BrowserRouter>
  )
}

export default App