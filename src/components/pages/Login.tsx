import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
import { toast } from "react-toastify";

// interface Input{
//     username: string,
//     password: string
// }
export default function Login() {
    const [input, setInput] = useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate()
 const hdlsubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try{
        const rs = await axios.post("http://10.90.1.127:8080/login",input)

        console.log(rs)
        if(rs.status === 200){
            toast.success("ล็อคอินสำเร็จ",{
                theme: "colored",
                position: "top-center"
            })
            sessionStorage.setItem("sessUsername", rs.data.username)
            sessionStorage.setItem("sessRole", rs.data.role)
            navigate("/Home")
        }
        
    }catch(error: any){
        toast.error(error.response.data.error,{
            theme: "colored",
            position:"top-center"
        })
    }
}
const hdlChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setInput(prv => ({...prv, [e.target.name]: e.target.value}))
}
  return (
    <div className="flex items-center justify-center h-[88vh]">
  <div className="w-80 rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden">
    <div className="flex flex-col justify-center items-center space-y-2">
      <h2 className="text-2xl font-medium text-slate-700">Login</h2>
      <p className="text-slate-500">Enter details below.</p>
    </div>
    <form onSubmit={hdlsubmit} className="w-full mt-4 space-y-3">
      <div>
        <input className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300" value={input.username} onChange={hdlChange} placeholder="Username" id="username" name="username" type="text" />
      </div>
      <div>
        <input className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300" value={input.password} onChange={hdlChange} placeholder="Password" id="password" name="password" type="password" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input className="mr-2 w-4 h-4" id="remember" name="remember" type="checkbox" />
          <span className="text-slate-500">Remember me </span>
        </div>
        <a className="text-blue-500 font-medium hover:underline" href="#">
          Forgot Password
        </a>
      </div>
      <button className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2" id="login" name="login" type="submit">
        login
      </button>
      <p className="flex justify-center space-x-1">
        <span className="text-slate-700"> Have an account? </span>
        <Link to="/Signup" className="text-blue-500 hover:underline" >
          Sign Up
        </Link>
      </p>
    </form>
  </div>
</div>

  );
}
