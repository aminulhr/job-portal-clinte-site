import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
