import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8080/api/auth/login", {
      email,
      password,
    });

    dispatch(setAuth(res.data));
    navigate("/");
  };

  return (
    <div style={{ padding: 50 }}>
      <h1>Login</h1>

      <form onSubmit={login}>
        <input
          placeholder="correo"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="contraseña"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
