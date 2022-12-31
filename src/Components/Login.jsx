import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useContext(AuthContext);

  return (
    <div>
      <form data-testid="auth_form">
        <input type="email" data-testid="email" placeholder="Enter Email" value={email}  onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <input
          type="password"
          data-testid="password"
          placeholder="Enter password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <br />
        <input
          type="submit"
          onClick={() => handleLogin({ email, password })}
        />
      </form>
    </div>
  );
}
