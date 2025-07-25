import { post } from "./requester";

const baseUrl = 'http://localhost:3030/users';

interface AuthTypes {
    email: string
    password: string
    accessToken?: string;
    _id?: string
};

export const useLogin = () => {
    const login = async (email: string, password: string): Promise<AuthTypes> => {
      const response = await post<AuthTypes>(`${baseUrl}/login`, { email, password });
      localStorage.setItem('auth', JSON.stringify(response));
      return response;
    };
  
    return { login };
  };

  export const useRegister = () => {

    const register = async (email:string, password:string): Promise<AuthTypes> => {
        const response = await post<AuthTypes>(`${baseUrl}/register`, { email,password });
        localStorage.setItem('auth', JSON.stringify(response))
        return response
    };

    return {register};
;}