// src/App.js
import React from 'react';
import './App.css';
import Actividad from './components/actividad'; // Asegúrate de que sea 'Actividad' y no 'actividad'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Actividad /> {/* Usa el componente Actividad correctamente */}
        </div>
    );
}

export default App;
