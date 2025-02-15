import React from "react";

const User = ({ user, onBan }) => {
  return (
    <p>
      {user.name} {user.surname}, возраст: {user.age}
      <button onClick={() => onBan(user.id)}>Забанить</button>
    </p>
  );
};

export default User;
