// pages/LoginPage.tsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import iconMap from "../../Data/iconMap";
import Swal from "sweetalert2";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState<true | false>(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "password") {
      localStorage.setItem("auth", "true"); // Set auth status di localStorage
      navigate("/dashboard"); // Arahkan ke halaman dashboard
      Swal.fire({
        icon: "success",
        title: "Login Berhasil",
        text: "Login Berhasil",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="label mt-3">
            <span className="label-text">Email</span>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <input
              placeholder="Jhon.due@gmail.com"
              className=" w-full max-w-xl"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <div className="label mt-3">
            <span className="label-text">Password</span>
            <span className="label-text-alt">
              <Link to="" className="text-[#00499E] ">
                Lupa Password
              </Link>
            </span>
          </div>
          <label className="input input-bordered flex items-center gap-2 ">
            <input
              placeholder="********"
              className="w-full max-w-xl"
              value={password}
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn btn-ghost btn-circle "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <iconMap.IoMdEyeOff className="text-2xl" />
              ) : (
                <iconMap.IoMdEye className="text-2xl" />
              )}
            </button>
          </label>
        </div>
        <button
          className="btn w-full mt-5 mb-2 bg-[#00499E] text-white"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
