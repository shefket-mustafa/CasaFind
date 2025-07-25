// auth-hooks/auth.ts
import { useAuth } from "../context/AuthContext";
import { post } from "./requester";

interface AuthResponse {
  accessToken: string;
  user: {
    email: string;
    _id: string;
  };
}

export const useLogin = () => {
  const { login: loginContext } = useAuth();

  const login = async (email: string, password: string) => {
    const response = await post<AuthResponse>(
      "https://casafind.onrender.com/login",
      { email, password }
    );

    loginContext({ ...response.user, accessToken: response.accessToken });
  };

  return { login };
};

export const useRegister = () => {
  const { login: loginContext } = useAuth();

  const register = async (email: string, password: string) => {
    const response = await post<AuthResponse>(
      "https://casafind.onrender.com/users/register",
      { email, password }
    );

    loginContext({ ...response.user, accessToken: response.accessToken });
  };

  return { register };
};
