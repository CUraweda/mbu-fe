import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <Outlet />
    </div>
  );
};

export default LoginLayout;
