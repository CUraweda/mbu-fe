import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../Data/api/authApi";
import useAuthStore from "../../store/useAuthStore";
import iconMap from "../../Data/iconMap";
import Loading from "../../Components/loading";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const setToken = useAuthStore((state) => state.setToken);
  const setRole = useAuthStore((state) => state.setRole);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { access_token, access_role } = await api.login({
        email,
        password,
      });
      setIsLoading(false);

      setToken(access_token);
      setRole(access_role);
      navigate("/");

      Swal.fire({
        icon: "success",
        title: "Login Berhasil",
        text: "Login Berhasil",
      });
    } catch (error) {
      setIsLoading(false);

      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: error instanceof Error ? error.message : "Terjadi kesalahan",
      });
    }
  };

  return (
    <div>
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit}>
        <div>
          <div className="mt-3 label">
            <span className="label-text">Email</span>
          </div>
          <label className="flex items-center gap-2 input input-bordered">
            <input
              placeholder="John.doe@gmail.com"
              className="w-full max-w-xl"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <div className="mt-3 label">
            <span className="label-text">Password</span>
            <span className="label-text-alt">
              <Link to="" className="text-[#00499E]">
                Lupa Password
              </Link>
            </span>
          </div>
          <label className="flex items-center gap-2 input input-bordered">
            <input
              placeholder="********"
              className="w-full max-w-xl"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn btn-ghost btn-circle"
              type="button"
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
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
