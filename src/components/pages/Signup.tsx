import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const navigate = useNavigate();

  const hdlsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { confirmPassword, ...data } = input; //filter confirmPassword ออก
    try {
        const ckdbox = document.getElementById("terms") as HTMLInputElement
        // console.log(ckdbox)
        if(!ckdbox.checked){
            return toast.warning("กรุณายืนยัน",{
                theme:"colored",
                position: "top-center"
            })
        }
      const rs = await axios.post("http://10.90.1.127:8080/register", data);
    //   console.log(rs);

      
      if (rs.status === 200) {
        toast.success("สมัครสำเร็จ", {
          theme: "colored",
          position: "top-center",
        });
        navigate("/login");
      }
    } catch (error: any) {
      toast.error(error.response.data.error,{
        theme:"colored",
        position: "top-center"
      });
    }
  };
  const hdlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e)
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };
  return (
    <form onSubmit={hdlsubmit}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              ฟอร์มสมัครใช้งานระบบ
            </p>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Username
              </label>
              <input
                placeholder="JohnDoe"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                name="username"
                // value={input.username}
                onChange={hdlChange}
                id="username"
                type="text"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                name="password"
                value={input.password}
                onChange={hdlChange}
                placeholder="••••••••"
                id="password"
                type="password"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Confirm password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={hdlChange}
                placeholder="••••••••"
                id="confirmPassword"
                type="password"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Role
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                name="role"
                // value={input.role}
                placeholder="admin, user, superuser"
                onChange={hdlChange}
                id="role"
                type="text"
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  focus:ring-primary-600 ring-offset-gray-800"
                  type="checkbox"
                  aria-describedby="terms"
                  id="terms"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-light text-gray-500 ">
                  I accept the
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline text-primary-500"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
              type="submit"
            >
              สมัคร
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
