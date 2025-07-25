import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email!").min(3).max(15).required("Email is required!"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});
