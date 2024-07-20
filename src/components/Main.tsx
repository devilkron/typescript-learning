import  { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./Layout/userLayout";
import Home from "./pages/Home";
import About from "./pages/About";



const App: FC = () => {
  return(
    <BrowserRouter>
    {/* ปัญหาที่พบคือ UserLayout ต้องอยู่ในรูปแบบนี้ <Route><Route/> และ <Route/> ทุกอย่างต้องอยู่ภายใน UserLayout */}
      <Routes>
        <Route path="/" element={<UserLayout/>}>
        <Route path="Home" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App