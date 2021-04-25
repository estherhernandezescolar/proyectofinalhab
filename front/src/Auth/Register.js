import { useState } from "react";
// import {useDispatch,useSelector} from 'react-redux'
// import { Redirect } rom 'react-router-dom'
import "./Register.css";
import Swal from "sweetalert2";

function Registro() {
  const [usuario, setUsuario] = useState({});
  const [error, setError] = useState();
  const Swal = require("sweetalert2");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:9999/usuario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario),
      });
      setUsuario("");
    } catch (e) {
      console.warn(e);
      setError(true);
    }
    Swal.fire("Revisa tu email para verificar el registro y poder coronarte");
  };

  return (
    <div className="registerpage">
      <h2 className="tituloregistro">Regístrate</h2>

      <form className="register form" onSubmit={handleSubmit}>
        <input
          className="idatos"
          name="email"
          required
          placeholder="email..."
          value={usuario.email || ""}
          onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
        />
        <br></br>
        <input
          className="idatos"
          name="password"
          type="password"
          required
          placeholder="Contraseña..."
          value={usuario.contrasena || ""}
          onChange={(e) =>
            setUsuario({ ...usuario, contrasena: e.target.value })
          }
        />
        <br></br>
        <input
          className="iotros"
          name="nif_cif"
          placeholder="NIF o CIF..."
          required
          value={usuario.nif_cif || ""}
          onChange={(e) => setUsuario({ ...usuario, nif_cif: e.target.value })}
        />
        <br></br>
        <input
          className="idatos"
          name="nombre"
          placeholder="Nombre y Apellido"
          value={usuario.nombre || ""}
          onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
        />
        <br></br>
        <input
          className="iotros"
          name="telefono"
          placeholder="Teléfono..."
          value={usuario.telefono || ""}
          onChange={(e) => setUsuario({ ...usuario, telefono: e.target.value })}
        />
        <br></br>
        <input
          className="idatos"
          name="bio"
          placeholder="¿A qué te dedicas?"
          value={usuario.bio || ""}
          onChange={(e) => setUsuario({ ...usuario, bio: e.target.value })}
        />
        <br></br>
        <input
          className="ipropono"
          name="rol"
          placeholder="Para reservar, pon 'Cliente'.
                            Para registrar un coworking, pon 'Propietario'."
          value={usuario.rol || ""}
          onChange={(e) => setUsuario({ ...usuario, rol: e.target.value })}
        />
        <br></br>

        <button className="crownbutton">Quiero coronarme</button>

        {error && <div>Ya existe este usuario</div>}
      </form>
    </div>
  );
}
export default Registro;
