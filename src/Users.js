import React, { useState } from "react";
import User from "./User";

const id = () => "_" + Math.random().toString(36).substr(2, 9); // Генератор id

const initUsers = [
  { id: id(), name: "user1", surname: "surn1", age: "30" },
  { id: id(), name: "user2", surname: "surn2", age: "31" },
  { id: id(), name: "user3", surname: "surn3", age: "32" },
];

const Users = () => {
  const [users, setUsers] = useState(initUsers);

  function changeField(id, field, event) {
    setUsers(users.map(user => (user.id === id ? { ...user, [field]: event.target.value } : user)));
  }

  return (
    <div>
      <table>
        <tbody>
          {users.map(user => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              surname={user.surname}
              age={user.age}
              changeField={changeField}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
