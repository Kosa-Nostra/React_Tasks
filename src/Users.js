import React, { useState } from "react";
import User from "./User";

const id = () => "_" + Math.random().toString(36).substr(2, 9); // Генератор id

const initUsers = [
  { id: id(), name: "user1", surname: "surn1", age: 30 },
  { id: id(), name: "user2", surname: "surn2", age: 31 },
  { id: id(), name: "user3", surname: "surn3", age: 32 },
];

const Users = () => {
  const [users, setUsers] = useState(initUsers);

  const handleBan = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} onBan={handleBan} />
      ))}
    </div>
  );
};

export default Users;
