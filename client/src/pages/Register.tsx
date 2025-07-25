import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { listingSchema } from "../utils/yup/listingSchema";
import { Link } from "react-router";
// import { v4 as uuidv4 } from "uuid";
interface FormData {
  email: string;
  password: string;
}

export default function Register() {
  //   const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(listingSchema) });

  //   const submitHouseButton = (data: FormData) => {
  //     const newListing = { ...data, id: uuidv4() };
  //     addListing(newListing);
  //     popHandler("You have submitted your property!");
  //     setTimeout(() => {
  //       navigate("/catalog");
  //     }, 2000);
  //   };

  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center px-4 py-20">
      <div className="w-full max-w-3xl bg-white border border-gray-200 shadow-xl rounded-2xl p-10">
        <h2 className="text-4xl font-bold text-center text-black mb-10">
          Register form
        </h2>

        <form onSubmit={handleSubmit()} className="space-y-6">
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
          <input
            {...register("password")}
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
            <input
            {...register("rePassword")}
            placeholder="Confirm password"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold cursor-pointer px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Register
          </button>

          <div className="flex justify-center gap-2">
            <p>Already registered?</p>
            <Link className="text-gray-500" to="/regiter">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
