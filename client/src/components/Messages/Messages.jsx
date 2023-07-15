import React, { useState } from "react";

const Messages = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const userClickHandler = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container">
      <h1>Centro de mensajes</h1>
      <div className="sidebar">
        <ul className="user-list">
          <li onClick={() => userClickHandler("Usuario 1")}>Usuario 1</li>
          <li onClick={() => userClickHandler("Usuario 2")}>Usuario 2</li>
          <li onClick={() => userClickHandler("Usuario 3")}>Usuario 3</li>
          <li onClick={() => userClickHandler("Usuario 4")}>Usuario 4</li>
        </ul>
      </div>
      <div className="message-container">
        {selectedUser ? (
          <div className="chat">
            <h2>Chat con {selectedUser}</h2>
            {/* Aquí se renderizarían los mensajes */}
          </div>
        ) : (
          <div className="placeholder">
            <p>Selecciona un usuario para ver los mensajes</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
