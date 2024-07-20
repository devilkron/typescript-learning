import  {FC, lazy, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import { ConfigProvider } from "antd";
import Loader from "./components/Loader";

const Main = lazy(() => import("./components/Main"));

const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <ConfigProvider>
        <ToastContainer />
        {loading ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Main />
          </Suspense>
        )}
      </ConfigProvider>
    </Suspense>
  );
};

export default App;
