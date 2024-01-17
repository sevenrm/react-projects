//UserListComponent.jsx
import React, { useState, useEffect, lazy } from "react";

const UserListComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => setUsers(data));
  }, []);
};

return (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);

export default UserListComponent;
