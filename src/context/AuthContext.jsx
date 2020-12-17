import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState(localStorage.getItem("token") || "");

  localStorage.setItem("token", state);

  return (
    <AuthContext.Provider value={{ state, setState }}>
      {children}
    </AuthContext.Provider>
  );
};
