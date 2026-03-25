import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router";
import { useRegister } from "../auth-hooks/auth";
import { usePopUp } from "../context/PopUpContext";
import { registerSchema } from "../utils/yup/registerSchema";
import { useState } from "react";
import { motion } from "motion/react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

interface FormData {
  email: string;
  password: string;
  rePassword: string;
}

export default function Register() {
  const navigate = useNavigate();
  const { register: registerUser } = useRegister();
  const { popHandler } = usePopUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(registerSchema) });

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const registerHandler = async (data: FormData) => {
    try {
      await registerUser(data.email, data.password);
      popHandler("Registration successful!");
      setTimeout(() => {
        navigate("/catalog");
      }, 1500);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Registration failed.";
      popHandler(errorMessage);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black flex justify-center items-center px-4 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Create Account
            </h2>
            <p className="text-gray-300 text-sm">
              Join casaFind and start your journey
            </p>
          </div>

          <form onSubmit={handleSubmit(registerHandler)} className="space-y-5">
            {/* Email Input */}
            <div className="space-y-2">
              <input
                {...register("email")}
                placeholder="Email address"
                className="w-full bg-white/10 border border-white/20 px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
              {errors.email && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="relative">
                <input
                  {...register("password")}
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition pr-10"
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

            {/* Confirm Password Input */}
            <div className="space-y-2">
              <div className="relative">
                <input
                  {...register("rePassword")}
                  placeholder="Confirm password"
                  type={showRePassword ? "text" : "password"}
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowRePassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 transition"
                >
                  {showRePassword ? (
                    <IoEyeOutline size={18} />
                  ) : (
                    <IoEyeOffOutline size={18} />
                  )}
                </button>
              </div>
              {errors.rePassword && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.rePassword.message}
                </p>
              )}
            </div>

            {/* Register Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition duration-200 mt-6"
            >
              Create Account
            </motion.button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-white/20" />
              <span className="text-gray-400 text-xs">or</span>
              <div className="flex-1 h-px bg-white/20" />
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Already have an account?{" "}
                <Link
                  className="text-purple-400 hover:text-purple-300 font-semibold transition"
                  to="/login"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Footer text */}
        <p className="text-center text-gray-500 text-xs mt-6">
          By creating an account, you agree to our Terms of Service
        </p>
      </motion.div>
    </div>
  );
}
