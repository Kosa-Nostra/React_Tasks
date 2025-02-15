import React from "react";

const UserField = ({ id, text, type, isEdit, editUser }) => {
  return isEdit ? (
    <input value={text} onChange={(e) => editUser(id, type, e)} />
  ) : (
    <span>{text}</span>
  );
};

export default UserField;
