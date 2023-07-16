import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessages, getUserById } from "../../Redux/actions";

const Messages = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const userId = useSelector((state) => state.userId)

  useEffect(() => {
    const localStorageContent = localStorage.getItem("cachedUser");
    const { id } = JSON.parse(localStorageContent);
    dispatch(getAllMessages(id));
  }, [dispatch]);

  const userClickHandler = (user) => {
    setSelectedUser(user);
  };

  const renderUserList = () => {
    // Renderizar la lista de usuarios disponibles
    const uniqueSenders = messages.reduce((sendersSet, messageGroup) => {
      messageGroup.forEach((message) => {
        dispatch(getUserById(message.idSend))
         /////////////////////////////////////////////////////////////////
         ////////////////////////////////////////////////////////////////
         ///////////////////////////////////////////////////////////////
        console.log(nombreId)
        sendersSet.add(message.idSend);
      });
      return sendersSet;
    }, new Set());
    
    const userList = Array.from(uniqueSenders);

    return userList.map((user) => (
      <li key={user} onClick={() => userClickHandler(user)}>
        {user}
      </li>
    ));
  };

  const renderSelectedUserChat = () => {
    // Renderizar los mensajes del usuario seleccionado
    if (selectedUser && messages[selectedUser]) {
      return messages[selectedUser].map((message) => (
        <div key={message.id}>{message.message}</div>
      ));
    }
    return <p>Selecciona un usuario para ver los mensajes</p>;
  };

  return (
    <div className="container">
      <h1>Centro de mensajes</h1>
      <div className="sidebar">
        <ul className="user-list">{renderUserList()}</ul>
      </div>
      <div className="message-container">
        <div className="chat">
          <h2>Chat con {selectedUser}</h2>
          {renderSelectedUserChat()}
        </div>
      </div>
    </div>
  );
};

export default Messages;