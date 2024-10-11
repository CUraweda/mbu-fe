import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import iconMap from "../../Data/iconMap";
import Swal from "sweetalert2";
import { Auth } from "../../api/apiService";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const auth = async () => {
    try {
      setLoading(true); // Set loading state to true
      const payload = { email, password };
      const res = await Auth(payload);

      if (res && res.data && res.data.code === 200) {
        Swal.fire({
          icon: "success",
          title: "Login Berhasil",
          text: "Login Berhasil",
        });
        localStorage.setItem("auth", "true"); // Set auth status in localStorage
        navigate("/"); // Redirect to the dashboard
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Gagal",
          text: res.data.errors || "Login Gagal", // Display error message from API
        });
      }
    } catch (error: any) {
      const backendError =
        error.response?.data?.errors?.error?.message ||
        error.message ||
        "Terjadi kesalahan";
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: backendError,
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    if (email && password) {
      auth();
    } else {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Email dan Password tidak boleh kosong",
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
              className="w-full max-w-xl"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <div className="label mt-3">
            <span className="label-text">Password</span>
            <span className="label-text-alt">
              <Link to="" className="text-[#00499E]">
                Lupa Password
              </Link>
            </span>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <input
              placeholder="********"
              className="w-full max-w-xl"
              value={password}
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className="btn btn-ghost btn-circle"
              type="button" // Changed to button to avoid form submission
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
          className={`btn w-full mt-5 mb-2 bg-[#00499E] text-white ${
            loading ? "loading" : ""
          }`}
          type="submit"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
