import React, { createContext, useState } from "react";
export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLogin = (body) => {
    console.log(body)
    setLoading(true);
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      data:body,
    })
      .then((res) => {
        setToken(res.data.token);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const value = {
    handleLogin,
    token,
    setToken,
    loading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
