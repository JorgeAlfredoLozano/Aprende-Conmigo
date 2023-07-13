import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAnuncio, deleteAnuncio, getLesson } from "../../Redux/actions";
import { useParams, useNavigate } from "react-router-dom";
import style from "../FormAnuncio/FormAnuncio.module.css";

const UpdatePubli = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const datoPublication = useSelector((state) => state.allPublication);
  const { id } = useParams();
  const datoId = datoPublication.data && datoPublication.data.filter((el) => el.id === id)[0];

  useEffect(() => {
    dispatch(getLesson());
  }, [dispatch]);

  const [input, setInput] = useState({
    title: datoId?.title || "",
    about_class: datoId?.about_class || "",
    about_teacher: datoId?.about_teacher || "",
    value: datoId?.value || "",
    status: datoId?.status || false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = () => {
    dispatch(deleteAnuncio(id));
    alert("Aviso eliminado con éxito!!");
    navigate("/perfil");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const boton = event.target.name;
    if (boton === "actualizar") {
      dispatch(updateAnuncio(id, input));
      alert("Aviso actualizado con éxito!!");
      navigate("/perfil");
    } else if (boton === "eliminar") {
      handleDelete();
    } else if (boton === "volver") {
      navigate("/perfil");
    }
  };

  return (
    <div className={style.x}>
      <form className={style.container} onSubmit={handleSubmit}>
        <div>
          <label className={style.label}>Título:</label>
          <input type="text" name="title" value={input.title} onChange={handleChange} />
        </div>
        <div>
          <label className={style.label}>Acerca De La Clase:</label>
          <textarea className={style.textarea} name="about_class" value={input.about_class} onChange={handleChange} />
        </div>
        <div>
          <label className={style.label}>Acerca Del Profesor:</label>
          <textarea className={style.textarea} name="about_teacher" value={input.about_teacher} onChange={handleChange} />
        </div>
        <div>
          <label className={style.label}>Precio (C/H):</label>
          <input type="number" name="value" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label>Nivel: {datoId?.grade}</label>
        </div>
        <div>
          <label>Materia: {datoId?.Lessons[0]?.lesson_name}</label>
        </div>
        <button className={style.submit} name="actualizar" type="submit" onClick={handleSubmit}>
          Actualizar
        </button>
        <button className={style.submit} name="eliminar" type="button" onClick={handleDelete}>
          Eliminar
        </button>
        <button className={style.submit} name="volver" type="submit" onClick={handleSubmit}>
          Volver
        </button>
      </form>
    </div>
  );
};

export default UpdatePubli;

