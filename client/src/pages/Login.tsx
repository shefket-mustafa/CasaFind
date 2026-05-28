import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../auth-hooks/auth";
import { loginSchema } from "../utils/yup/loginSchema";
import { usePopUp } from "../context/PopUpContext";
import { useState } from "react";
import { motion } from "motion/react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

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
    formState: { isSubmitting, errors },
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
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black flex justify-center items-center px-4 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-300 text-sm">
              Sign in to your casaFind account
            </p>
          </div>

          <form onSubmit={handleSubmit(loginHandler)} className="space-y-5">
            <div className="space-y-2">
              <input
                {...register("email")}
                placeholder="Email address"
                className="w-full bg-white/10 border border-white/20 px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              {errors.email && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <div className="relative">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 transition"
                >
                  {showPassword ? (
                    <IoEyeOutline size={18} />
                  ) : (
                    <IoEyeOffOutline size={18} />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.password.message}
                </p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </motion.button>

            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-white/20" />
              <span className="text-gray-400 text-xs">or</span>
              <div className="flex-1 h-px bg-white/20" />
            </div>

            {/* Register Link */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account?{" "}
                <Link
                  className="text-blue-400 hover:text-blue-300 font-semibold transition"
                  to="/register"
                >
                  Create one
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Footer text */}
        <p className="text-center text-gray-500 text-xs mt-6">
          By signing in, you agree to our Terms of Service
        </p>
      </motion.div>
    </div>
  );
}
