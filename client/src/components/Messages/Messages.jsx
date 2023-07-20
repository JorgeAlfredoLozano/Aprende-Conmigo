import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessages, getUserById, sendChat } from "../../Redux/actions";
import axios from "axios";

const Messages = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userList, setUserList] = useState([]);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const messages = useSelector((state) => state.messages);
  const localStorageContent = localStorage.getItem("cachedUser");
  const { id } = JSON.parse(localStorageContent);
  const textareaRef = useRef();

  const scrollChatToBottom = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.scrollTop = textarea.scrollHeight;
    }
  };

  useEffect(() => {
    dispatch(getAllMessages(id));

    const intervalId = setInterval(() => {
      dispatch(getAllMessages(id));
    }, 5000);

    // Scroll al cargar los mensajes iniciales
    scrollChatToBottom();

    return () => clearInterval(intervalId);
  }, [dispatch, id]);

  useEffect(() => {
    // Scroll cuando se actualizan los mensajes o se selecciona un usuario
    scrollChatToBottom();
  }, [messages, selectedUserId]);

  const userClickHandler = (userId) => {
    setSelectedUserId(userId);
  };

  // Función para obtener el ID del remitente o destinatario dependiendo del mensaje
  const getUserReceiverId = (messageGroup) => {
    const userReceiver = messageGroup.find((message) => message.idSend !== id);
    return userReceiver ? userReceiver.idSend : messageGroup[0].idReceived;
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const uniqueReceiverIds = new Set();

      messages.forEach((messageGroup) => {
        const userReceiverId = getUserReceiverId(messageGroup);
        if (userReceiverId) uniqueReceiverIds.add(userReceiverId);
      });

      const receiverIds = Array.from(uniqueReceiverIds);
      const users = [];

      for (const receiverId of receiverIds) {
        try {
          const response = await axios.get(
            `http://localhost:3001/user/get/${receiverId}`
          );
          users.push(response.data);
        } catch (error) {
          console.log(error);
        }
      }

      setUserList(users);
    };

    fetchUsers();
  }, [messages, id]);

  const renderUserList = () => {
    if (userList.length === 0) {
      return <p>No hay usuarios con mensajes</p>;
    }
    return userList.map((user) => (
      <li key={user.id} onClick={() => userClickHandler(user.id)}>
        {user.name}
      </li>
    ));
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const renderSelectedUserChat = () => {
    if (messages.length === 0) {
      return <p>No hay mensajes disponibles</p>;
    }
    if (selectedUserId) {
      const userMessages = messages.find(
        (messageGroup) => getUserReceiverId(messageGroup) === selectedUserId
      );

      if (userMessages) {
        return (
          <div>
            <textarea
              ref={textareaRef}
              className="chat-textarea"
              style={{ width: "50%", height: "150px" }}
              readOnly
              value={userMessages
                .map(
                  (message) =>
                    `${message.idSend !== id ? "Tu: " : "Yo: "}${message.message}`
                )
                .join("\n")}
            ></textarea>
            <br />

            <input
              type="text"
              id="myInput"
              value={inputValue}
              onChange={handleChange}
              style={{ width: "50%", height: "30px" }}
            />
            <button
              style={{ width: "6%", height: "30px" }}
              onClick={handleClick}
            >
              Enviar
            </button>
          </div>
        );
      }
    }

    return <p>Selecciona un usuario para ver los mensajes</p>;
  };

  const handleClick = () => {
    const send = {
      idSend: id,
      idReceived: selectedUserId,
      message: inputValue,
    };
    dispatch(sendChat(send));
    setInputValue("");
  };

  return (
    <div className="container">
      <h1>Centro de mensajes</h1>
      <div className="sidebar">
        <ul className="user-list">{renderUserList()}</ul>
      </div>
      <div className="message-container">
        <div className="chat">
          <h2>
            Chat con{" "}
            {selectedUserId &&
              userList.find((user) => user.id === selectedUserId)?.name}
          </h2>
          {renderSelectedUserChat()}
        </div>
      </div>
    </div>
  );
};

export default Messages;
