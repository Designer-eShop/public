import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState(localStorage.getItem("id"));

  if (state) {
    localStorage.setItem("id", state);
  }

  return (
    <AuthContext.Provider value={{ state, setState }}>
      {children}
    </AuthContext.Provider>
  );
};
