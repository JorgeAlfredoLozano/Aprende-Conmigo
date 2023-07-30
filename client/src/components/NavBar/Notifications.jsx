import { BiSolidMessageRounded } from "react-icons/bi";
import { getNotReadMessages, getAllMessages, getUserById } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Notifications = () => {
  const dispatch = useDispatch();
  const messagesNR = useSelector((state) => state.messagesNR);
  const usuario = useSelector((state) => state.userId);
  const localStorageContent = localStorage.getItem("cachedUser");
  const { id } = JSON.parse(localStorageContent);

  const [notReadCount, setNotReadCount] = useState(0);
  const [usersWithUnreadMessages, setUsersWithUnreadMessages] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Cargar mensajes no leídos al montar el componente
    dispatch(getAllMessages(id));
    dispatch(getNotReadMessages("all", id));

    // Configurar un intervalo para cargar mensajes no leídos cada 15 segundos
    const intervalId = setInterval(() => {
      dispatch(getNotReadMessages("all", id));
    }, 10000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [dispatch, id]);

  useEffect(() => {
    // Actualizar el estado de las notificaciones cuando cambie el valor de messagesNR.notReadCount
    if (messagesNR.notReadCount) {
      setNotReadCount(messagesNR.notReadCount);
    } else {setNotReadCount(0)}
  }, [messagesNR.notReadCount]);

  useEffect(() => {
    // Update the list of users with their unread messages when messagesNR changes
    if (messagesNR.notRead) {
      console.log(messagesNR.notRead)
      const uniqueIds = Array.from(new Set(messagesNR.notRead.map((message) => message.idSend)));
      // Fetch user information for unique ids
      const fetchUsers = async () => {
        const users = await Promise.all(uniqueIds.map((userId) => dispatch(getUserById(userId))));
        setUsersWithUnreadMessages(users.map((user) => user.payload.data)); // Extract the user data from the action payload
      };
      fetchUsers();
    }
  }, [messagesNR.notRead]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div>
      {/* Render the unread message count with a hoverable notification icon */}
      <div
        style={{ position: "relative", cursor: "pointer" }}
        onMouseEnter={handleDropdownToggle}
        onMouseLeave={handleDropdownToggle}
      >
        <BiSolidMessageRounded
          style={{ width: "50px", height: "50px", fontSize: "24px", color: "white" }}
        />
        {notReadCount >= 0 && (
          <span
            style={{
              position: "absolute",
              top: "7px",
              right: "13px",
              backgroundColor: "rgb(35, 128, 211)",
              borderRadius: "50%",
              color: "white",
              padding: "4px 8px",
              fontSize: "12px",
            }}
          >
            {notReadCount}
          </span>
        )}
        {isDropdownOpen && usersWithUnreadMessages.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "50px",
              right: "0",
              backgroundColor: "white",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "8px",
              minWidth: "200px",
            }}
          >
            <p style={{fontWeight:"bold"}}>Mensajes sin leer</p>
            <hr />
            <ul style={{ listStyle: "none", padding: "0" }}>
              {usersWithUnreadMessages.map((user, index) => (
                <li key={index} style={{ margin: "4px 0" }}>
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
