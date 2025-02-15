import React from "react";

const User = ({ id, name, surname, age, isEdit, toggleMode, editUser }) => {
  return (
    <div>
      name: {isEdit ? <input value={name} onChange={(e) => editUser(id, "name", e)} /> : <span>{name}</span>}
      surname: {isEdit ? <input value={surname} onChange={(e) => editUser(id, "surname", e)} /> : <span>{surname}</span>}
      age: {isEdit ? <input type="number" value={age} onChange={(e) => editUser(id, "age", e)} /> : <span>{age}</span>}

      <button onClick={() => toggleMode(id)}>{isEdit ? "save" : "edit"}</button>
    </div>
  );
};

export default User;
