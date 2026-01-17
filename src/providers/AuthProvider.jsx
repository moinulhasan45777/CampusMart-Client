"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const cookies = document.cookie.split("; ");
      const userEmailCookie = cookies.find((cookie) =>
        cookie.startsWith("userEmail="),
      );

      if (userEmailCookie) {
        const email = userEmailCookie.split("=")[1];
        setUser({ email });
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = (email) => {
    document.cookie = `userEmail=${email}; path=/; max-age=86400`;
    setUser({ email });
  };

  const logout = () => {
    document.cookie = "userEmail=; path=/; max-age=0";
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
