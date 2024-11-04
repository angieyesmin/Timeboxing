import React, { useEffect, useState } from 'react';
import api from '../Api'; // Asegúrate de que la ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css';

const Actividad = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null); // Agrega un estado para manejar errores

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await api.get('/user'); // Usa el cliente API para la solicitud
        console.log('Response from API:', response.data); // Verifica la respuesta
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
        setError('Error al cargar los estudiantes.'); // Manejo de error
      }
    };

    fetchStudents();
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#0C85FFFF', minHeight: '100vh' }}>
      <h1 style={{ color: 'red' }}>Bienvenidos al Sistema de Estudiantes</h1>
      <h2>Lista de Estudiantes</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>} {/* Muestra el mensaje de error */}
      <table className="table table-bordered table-hover table-custom">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Gmail</th>
            <th>Hora de Entrada</th>
            <th>Hora de Salida</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.start_time}</td>
                <td>{student.end_time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No hay estudiantes disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Actividad;
