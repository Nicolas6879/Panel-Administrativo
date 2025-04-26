import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <div className="font-bold text-lg">🛠️ Panel Admin</div>
      <div className="space-x-4">
        <NavLink to="/clientes" className={({ isActive }) => isActive ? "underline" : ""}>Clientes</NavLink>
        <NavLink to="/proveedor" className={({ isActive }) => isActive ? "underline" : ""}>Proveedor</NavLink>
        <NavLink to="/usuarios" className={({ isActive }) => isActive ? "underline" : ""}>Usuarios</NavLink>
        <NavLink to="/logout" className={({ isActive }) => isActive ? "underline" : ""}>Logout</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
