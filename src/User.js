import React from "react";
import UserField from "./UserField";

const User = ({ id, name, surname, age, isEdit, toggleMode, editUser }) => {
  return (
    <div>
      name: <UserField id={id} text={name} type="name" isEdit={isEdit} editUser={editUser} />,
      surname: <UserField id={id} text={surname} type="surname" isEdit={isEdit} editUser={editUser} />,
      age: <UserField id={id} text={age} type="age" isEdit={isEdit} editUser={editUser} />
      
      <button onClick={() => toggleMode(id)}>{isEdit ? "save" : "edit"}</button>
    </div>
  );
};

export default User;
