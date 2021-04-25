import useFetch from "../useFetch";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./VerReservasCoworking.css";

function VerReservasCoworking() {
  const login = useSelector((s) => s.login);
  const { id_coworking } = useParams();
  //const { usuario, token} = useSelector((s) => s.login);
  let id_usuario = login.usuario.id_usuario;
  console.log(id_usuario);

  const reservas =
    useFetch(`http://localhost:9999/coworking/${id_coworking}/reservas`) || [];

  return (
    <div className="section reservasCoworking">
      <h2>Reservas</h2>
      {!reservas && "Cargando..."}
      {reservas && (
        <table>
          <thead>
            <tr>
              <th>id_sala</th>
              <th>tipo</th>
              <th>id_reserva</th>
              <th>id_usuario</th>
              <th>estado</th>
              <th>pago</th>
              <th>fecha inicio</th>
              <th>fecha fin</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => {
              return (
                <tr key={reserva.id_coworking}>
                  <td>{reserva.id_sala}</td>
                  <td>{reserva.tipo}</td>
                  <td>{reserva.id_reserva}</td>
                  <td>{reserva.id_usuario}</td>
                  <td>{reserva.estado}</td>
                  <td>{reserva.pago}</td>
                  <td>{reserva.fecha_inicio}</td>
                  <td>{reserva.fecha_fin}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default VerReservasCoworking;
