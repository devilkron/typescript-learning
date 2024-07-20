import { FC } from "react";
import { toast } from "react-toastify";

const Home: FC = () => {
  const showToast = () => {
    toast.success("ยินดีต้อนรับครับผม");
  };

  return (
    <div>
      <h1 className="text-blue-500">Home Page</h1>
      <button
        onClick={showToast}
        className="mt-3 cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        คลิก ME
      </button>
    </div>
  );
};

export default Home;
