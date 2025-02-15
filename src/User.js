import React from "react";

const User = ({ user }) => {
  return (
    <p>
      {user.id} {user.name} {user.surname}, возраст: {user.age}
    </p>
  );
};

export default User;
