import { useState } from "react";
import api from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/auth/register", form);
    setSuccess(true);
  };

  return (
    <div className="page">
      <h2>Registro</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nombre" onChange={handleChange} />
        <input name="email" placeholder="Correo" onChange={handleChange} />
        <input
          name="password"
          placeholder="Contraseña"
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Crear cuenta</button>
      </form>

      {success && <p>Registro exitoso. Ahora puedes iniciar sesión.</p>}
    </div>
  );
}
