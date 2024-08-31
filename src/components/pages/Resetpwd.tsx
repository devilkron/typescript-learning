import { useNavigate } from "react-router-dom";

function Resetpwd() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800">
        Reset your password
      </h1>
      <p className="mt-2 text-gray-600 text-center">
        Enter your email and we’ll send you instructions on how to reset your
        password.
      </p>
      <form className="mt-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white hover:bg-blue-400 p-2 rounded-md"
        >
          Send instructions
        </button>
      </form>
      <p className="mt-4 text-gray-600">
        Go back to
        <a onClick={handleNavigate} className="text-blue-600 hover:underline cursor-pointer">
          Login page
        </a>
        .
      </p>
    </div>
  );
}

export default Resetpwd;
