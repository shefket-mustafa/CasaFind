
import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email!")
    .min(3, "Email must be at least 3 characters")
    .max(50, "Email is too long")
    .required("Email is required!"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match!")
    .required("Please confirm your password"),
});
