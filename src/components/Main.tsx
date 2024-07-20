import  { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./Layout/userLayout";
import Home from "./pages/Home";
import About from "./pages/About";



const App: FC = () => {
  return(
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<UserLayout/>}/>
        {/* <Route index element={<Home />} /> */}
        <Route path="Home" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App