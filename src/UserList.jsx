import React, { useEffect, useState } from 'react';
import './App.css'
const UserList = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
fetchUsers();
}, []);

const fetchUsers = async () => {
try {
const response = await fetch('https://667312c16ca902ae11b30947.mockapi.io/users');
const data = await response.json();
setUsers(data);
} catch (error) {
console.error('Error en la solicitud:', error);
}
};

return (
<div className="form-container">
<h1>Lista de Usuarios</h1>
{/* Mostrar lista de usuarios */}
<ul>
{users.map((user) => (
<li key={user.id}>{user.name} - {user.email}</li>
))}
</ul>
</div>
);
};

export default UserList;