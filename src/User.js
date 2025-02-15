import React from "react";

const User = ({ user }) => {
  return (
    <p>
      {user.name} {user.surname}, возраст: {user.age}
    </p>
  );
};

export default User;
