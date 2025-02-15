import React, { useState } from "react";
import User from "./User";

const id = () => "_" + Math.random().toString(36).substr(2, 9); // Генератор id

const initUsers = [
  { id: id(), name: "user1", surname: "surn1", age: 30, isEdit: false },
  { id: id(), name: "user2", surname: "surn2", age: 31, isEdit: false },
  { id: id(), name: "user3", surname: "surn3", age: 32, isEdit: false },
];

const Users = () => {
  const [users, setUsers] = useState(initUsers);

  function toggleMode(id) {
    setUsers(users.map(user => (user.id === id ? { ...user, isEdit: !user.isEdit } : user)));
  }

  function editUser(id, field, event) {
    setUsers(users.map(user => (user.id === id ? { ...user, [field]: event.target.value } : user)));
  }

  return (
    <div>
      {users.map(user => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          surname={user.surname}
          age={user.age}
          isEdit={user.isEdit}
          toggleMode={toggleMode}
          editUser={editUser}
        />
      ))}
    </div>
  );
};

export default Users;
