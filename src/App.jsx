// En el componente principal
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.min.css';
import 'bootswatch/dist/quartz/bootstrap.min.css';
import './App.css'
import UserForm from './UserForm';

const App = () => {
const [users, setUsers] = useState([]);

const addUser = async (newUser) => {
// Agregar nuevo usuario al estado
try {
const response = await fetch('https://667312c16ca902ae11b30947.mockapi.io/users', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(newUser),
});
if (response.ok) {
// Obtener la respuesta y agregar usuario al estado
const data = await response.json();
setUsers([...users, data]);
} else {
console.error('Error al agregar usuario');
}} catch (error) {
console.error('Error en la solicitud: ', error);
}
};

return (
    <div className="form-container">
    <h1>Lista de Usuarios</h1>
    <UserForm addUser={addUser} />
    {/* Mostrar lista de usuarios */}
    <ul>
    {users.map((user, index) => (
    <li key={index}>{user.name} - {user.email}</li>
    ))}
    </ul>
    </div>
    );
    };
export default App;