import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface User {
  email: string;
  _id: string;
  accessToken: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const authData = localStorage.getItem("auth");
    if (authData) {
      setUser(JSON.parse(authData));
    }
  }, []);

  const login = (userData: User) => {
    localStorage.setItem("auth", JSON.stringify(userData));
    setUser(userData);
  };


  const logout = () => {
    localStorage.removeItem("auth");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
