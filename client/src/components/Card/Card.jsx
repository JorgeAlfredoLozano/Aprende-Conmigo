import style from "./Cards.module.css";
import { getAssetsById } from "../../Redux/actions";
import { useEffect, useState } from "react";

const Card = ({ title, value, lesson, grade, userId }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getAssetsById(userId)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const containerStyle = {
    backgroundImage: data ? `url(${data.assets})` : "none",
  };

  return (
    <div className={style.card_publication}>
      <div className={style.assets} style={containerStyle}></div>
      <div className={style.texto}>
        <div className={style.titlecont}>
          <h4 className={style.title}>{title}</h4>
        </div>
        <div className={style.contlesson}>
          <h5 className={style.lesson}>{lesson}</h5>
          <h6 className={style.grade}>{grade.split(",").join(" - ")}</h6>
          <h6 className={style.value}>💲{value}💸</h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
