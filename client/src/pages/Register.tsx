import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { listingSchema } from "../utils/yup/listingSchema";
import { Link, useNavigate } from "react-router";
import { useRegister } from "../auth-hooks/auth";
import { usePopUp } from "../context/PopUpContext";
import { registerSchema } from "../utils/yup/registerSchema";
// import { v4 as uuidv4 } from "uuid";
interface FormData {
  email: string;
  password: string;
  rePassword: string
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

  const registerHandler = async (data: FormData) => {
    try {
      await registerUser(data.email, data.password);
      popHandler("Registration successful!");
      setTimeout(() => {
        navigate("/catalog");
      }, 1500);
    } catch (err: any) {
      popHandler(err.message || "Registration failed.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center px-4 py-20">
      <div className="w-full max-w-3xl bg-white border border-gray-200 shadow-xl rounded-2xl p-10">
        <h2 className="text-4xl font-bold text-center text-black mb-10">
          Register form
        </h2>

        <form onSubmit={handleSubmit(registerHandler)} className="space-y-6">
        <input
            {...register("email")}
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            {...register("password")}
            placeholder="Password"
            type="password"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <input
            {...register("rePassword")}
            placeholder="Confirm password"
            type="password"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.rePassword && (
            <p className="text-red-500 text-sm">{errors.rePassword.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold cursor-pointer px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Register
          </button>

          <div className="flex justify-center gap-2">
            <p>Already registered?</p>
            <Link className="text-gray-500" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
