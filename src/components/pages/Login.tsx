import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

// interface Input{
//     username: string,
//     password: string
// }
export default function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const hdlReset = () => {
    navigate("/Resetpwd");
  };
  const hdlsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const rs = await axios.post("http://localhost:8080/login", input);

      console.log(rs);
      if (rs.status === 200) {
        toast.success("ล็อคอินสำเร็จ", {
          theme: "colored",
          position: "top-center",
        });
        sessionStorage.setItem("sessUsername", rs.data.username);
        sessionStorage.setItem("sessRole", rs.data.role);
        navigate("/Home");
      }
    } catch (error: any) {
      toast.error(error.response.data.error, {
        theme: "colored",
        position: "top-center",
      });
    }
  };
  const hdlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-foreground text-center">
            Login
          </h2>
          <p className="text-muted-foreground text-center mb-6">
            Enter your details below.
          </p>
          <form onSubmit={hdlsubmit} className="space-y-4">
            <div>
              <label className="block text-muted-foreground" htmlFor="username">
                Username
              </label>
              <input
                className="w-full p-3 border border-border rounded focus:outline-none focus:ring focus:ring-ring"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={input.username}
                onChange={hdlChange}
                required
              />
            </div>
            <div>
              <label className="block text-muted-foreground" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-3 border border-border rounded focus:outline-none focus:ring focus:ring-ring"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={input.password}
                onChange={hdlChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label className="text-muted-foreground" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a onClick={hdlReset} className="text-primary hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
              id="login"
              name="login"
              type="submit"
            >
              login
            </button>
          </form>
          <p className="mt-4 text-center text-muted-foreground">
            Have an account?{" "}
            <Link to="/Signup" className="text-primary hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
