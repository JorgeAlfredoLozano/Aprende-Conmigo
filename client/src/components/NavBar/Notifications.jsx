import { BiSolidMessageRounded } from "react-icons/bi";
import { getNotReadMessages,getAllMessages } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Notifications = () => {
  const dispatch = useDispatch();
  const messagesNR = useSelector((state) => state.messagesNR);
  const localStorageContent = localStorage.getItem("cachedUser");
  const { id } = JSON.parse(localStorageContent);

  dispatch(getAllMessages(id))
  dispatch(getNotReadMessages("all", id));
let nro=0
if (messagesNR.notReadCount) nro = messagesNR.notReadCount
console.log(nro)
  return (
    <div>
      <BiSolidMessageRounded
        style={{ width: "300px", height: "300px", fontSize: "24px" }}
      />
      <span
        style={{
          color: "white",
          fontSize: "65px",
          position: "relative",
          top: "-24px",
          left: "-160px",
        }}
      >
        {nro}
      </span>
    </div>
  );
};

export default Notifications;

