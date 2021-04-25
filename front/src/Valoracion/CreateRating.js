import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams, NavLink } from "react-router-dom";
import "./CreateRating.css";
import Swal from "sweetalert2";

function CreateValoracion() {
  const [error, setError] = useState();

  const [id_reserva, setId_reserva] = useState("");
  const [valoracion, setValoracion] = useState("");
  const login = useSelector((s) => s.login);
  const history = useHistory();
  const Swal = require("sweetalert2");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:9999/rating`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: login.token,
      },
      body: JSON.stringify({ id_reserva, valoracion }),
      method: "POST",
    });

    if (res.ok) {
      const { id_rating } = await res.json();
      // history.push(`/coworking/${id_coworking}/sala`)
    } else {
      console.log("Error");
      setError(true);
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Valoración creada",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="section createRating">
      <h1>¿Quieres valorar tu reserva?</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <span>Id_reserva:</span>
          <input
            name="id_reserva"
            required
            placeholder="Referencia reserva"
            value={id_reserva}
            onChange={(e) => setId_reserva(e.target.value)}
          />
        </fieldset>
        <fieldset>
          Valoración
          <select
            name="valoracion"
            required
            value={valoracion}
            onChange={(e) => setValoracion(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </fieldset>

        <button className="darrating">Crear valoración</button>
      </form>
    </div>
  );
}

export default CreateValoracion;
