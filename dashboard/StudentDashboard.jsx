import { useSelector } from "react-redux";

export default function StudentDashboard() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="page">
      <h2>Bienvenido, {user?.name}</h2>
      <p>Panel del Estudiante</p>

      <ul>
        <li><a href="/catalog">Ver catálogo</a></li>
        <li><a href="/loans">Mis préstamos</a></li>
        <li><a href="/profile">Mi perfil</a></li>
      </ul>
    </div>
  );
}
