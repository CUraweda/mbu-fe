import { Outlet } from "react-router-dom";
import Artlogin from "../Components/artlogin";
import logo from "../assets/Image/logo_mbu_primary.png";

const LoginLayout = () => {
  return (
    <div className="h-screen w-full justify-center flex items-center">
      <div className="card m-auto">
        <Artlogin />
        <div className="card bg-base-100 z-20 w-96 m-auto shadow-2xl rounded-md">
          <div className="card-body ">
            <img src={logo} alt="user" className="h-18 m-auto" />
            <div className="text-[#00499E] font-bold w-full text-center">
              MBU - LTI - MANBU
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
