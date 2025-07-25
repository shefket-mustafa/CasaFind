import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../auth-hooks/auth";
import { loginSchema } from "../utils/yup/loginSchema";
import { usePopUp } from "../context/PopUpContext";
import { useState } from "react";
interface FormData {
  email: string;
  password: string;
}
export default function Login() {
  const navigate = useNavigate();
  const { popHandler } = usePopUp();
  const { login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(loginSchema) });
  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = async (data: FormData) => {
    try {
      await login(data.email, data.password);
      popHandler("Successful login!");
      setTimeout(() => {
        navigate("/catalog");
      }, 2000);
    } catch (err) {
      popHandler("Login failed. Check your credentials.");
      console.log(err);
      
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center px-4 py-20">
      <div className="w-full max-w-3xl bg-white border border-gray-200 shadow-xl rounded-2xl p-10">
        <h2 className="text-4xl font-bold text-center text-black mb-10">
          Login form
        </h2>

        <form onSubmit={handleSubmit(loginHandler)} className="space-y-6">
  <input
    {...register("email")}
    placeholder="Email"
    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
  />
  {errors.email && (
    <p className="text-red-500 text-sm">{errors.email.message}</p>
  )}

  <div className="relative">
    <input
      {...register("password")}
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
    />
    <button
      type="button"
      onClick={() => setShowPassword((prev) => !prev)}
      className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500"
    >
      {showPassword ? "Hide" : "Show"}
    </button>
    {errors.password && (
      <p className="text-red-500 text-sm">{errors.password.message}</p>
    )}
  </div>

  <button
    type="submit"
    className="w-full bg-black text-white font-semibold cursor-pointer px-6 py-3 rounded-lg hover:bg-gray-800 transition"
  >
    Login
  </button>

  <div className="flex justify-center gap-2">
    <p>Don't have a registration?</p>
    <Link className="text-gray-500" to="/register">
      Register
    </Link>
  </div>
</form>

      </div>
    </div>
  );
}
