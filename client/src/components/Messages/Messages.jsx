import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessages, sendChat,getNotReadMessages, putSeen } from "../../Redux/actions";
import axios from "axios";
import style from './Messages.module.css';


const Messages = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userList, setUserList] = useState([]);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const messages = useSelector((state) => state.messages);
  const messagesNR = useSelector((state) => state.messagesNR)
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
    dispatch(getNotReadMessages("all",id))
    
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

  const userClickHandler = async (userId) => {
    await dispatch(putSeen(userId, id));
    await dispatch(getNotReadMessages("all",id))
    setSelectedUserId(userId);
    
  };

  const fetchUserListWithMessages = async () => {
    const uniqueUserIds = new Set();
    messages.forEach((messageGroup) => {
      uniqueUserIds.add(messageGroup[0].idSend);
      uniqueUserIds.add(messageGroup[0].idReceived);
    });

    const users = [];

    for (const userId of uniqueUserIds) {
      try {
        if (userId !== id) {
          const response = await axios.get(`http://localhost:3001/user/get/${userId}`);
          const user = response.data;
          users.push(user);
        }
      } catch (error) {
        console.log(error);
      }
    }

    setUserList(users);
  };

  useEffect(() => {
    fetchUserListWithMessages();
  }, [messages, id]);

  const renderUserList = () => {
    if (userList.length === 0) {
      return <p>No hay usuarios con mensajes</p>;
    }
  
    return userList.map((user) => {
      // Filtrar los mensajes no leídos para el usuario actual
      const userNotRead = messagesNR.notRead.filter((message) => {
        return (
          (message.idSend === user.id && message.idReceived === id) ||
          (message.idSend === id && message.idReceived === user.id)
        );
      });
  
      return (
        <p className={style.user} style={{margin:"0%", paddingBottom:"20px", color:"rgb(63, 81, 181)", display:"flex", flexDirection:"column", alignItems:"center"}} key={user.id} onClick={() => userClickHandler(user.id)}>
          <span style={{fontFamily:"Roboto", fontWeight:"600"}}>{user.name}</span> 
          <span>({userNotRead.length} mensajes no leídos)</span>
        </p>
      );
    });
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
        (messageGroup) =>
          messageGroup[0].idReceived === selectedUserId || messageGroup[0].idSend === selectedUserId
      );

      if (userMessages) {
        return (
          <div className={style.containerChatArea}>
            <textarea
              ref={textareaRef}
              className={style.chatArea}
              style={{ width: "45em", height: "280px", borderColor:"rgb(216, 233, 253)", borderStyle:"solid", borderWidth:"5px", borderRadius:"1em" }}
              readOnly
              value={userMessages
                .map(
                  (message) =>
                    `${message.idSend === id ? "Yo" : "Tu"}: ${message.message}`
                )
                .join("\n")}
            ></textarea>
            <br />

            <input
              type="text"
              id="myInput"
              value={inputValue}
              onChange={handleChange}
              style={{ width: "36em", height: "35px", outline:"none", borderColor:"rgb(216, 233, 253)", borderStyle:"solid", borderWidth:"5px", borderRadius:"1em"}}
              className={style.inputChat}
            />
            <button
              className={style.enviar}
              style={{ width: "8em", height: "30px"}}
              onClick={handleClick}
            >
              Enviar
            </button>
          </div>
        );
      }
    }

    return <p style={{textAlign:"center", color:"rgb(63, 81, 181)"}}>Selecciona un chat para ver los mensajes.</p>;
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
    <div className={style.container}>
      {/* <h1 className={style.centro}>Mensajes</h1> */}
      <div className={style.tabContainer}>
      <div className={style.sidebar}>
        <h2 style={{color:"rgb(63, 81, 181)", fontFamily:"Roboto", fontWeight:"900", marginBottom:"5%"}}>Chats</h2>
        <ul className={style.userList}>{renderUserList()}</ul>
      </div>
      <div className={style.messageContainer}>
        <div className={style.chat}>
          <h2 style={{color:"rgb(63, 81, 181)", fontFamily:"Roboto", fontWeight:"900"}}>
            {/* Mensajes con{" "} */}
            {selectedUserId &&
              userList.find((user) => user.id === selectedUserId)?.name}
          </h2>
          {renderSelectedUserChat()}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Messages;
