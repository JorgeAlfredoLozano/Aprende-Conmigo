import { putUser } from '../../Redux/actions';
import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import style from './FormUpdate.module.css';

const FormUpdate = (props) => {
  const email = localStorage.getItem("currentUser");
  const dispatch = useDispatch();
  
  const [input, setInput] = useState({
    name: '',
    date: '',
    gender: '',
    phone: ''
  });

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const completedFields = {};
    
    // filtro los campos completados
    for (const key in input) {
      if (input[key] !== '') {
        completedFields[key] = input[key];
      }
    }

    if (Object.keys(completedFields).length > 0) {
      dispatch(putUser(email, completedFields));
      props.onSubmit();
      alert("¡Tus datos han sido actualizados correctamente!");
      setInput({
        name: '',
        date: '',
        gender: '',
        phone: ''
      });
    } else {
      alert("Completa al menos un campo antes de enviar.");
    }
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <input className={style.name} type="text" name='name' value={input.name} onChange={(event) => handleChange(event)} placeholder="Nombre" />
        </div>
        <div>
          <input className={style.date} type="date" name='date' value={input.date} onChange={(event) => handleChange(event)} placeholder="Tu cumpleaños" />
        </div>
        <div>
          <select className={style.gender} name='gender' value={input.gender} onChange={(event) => handleChange(event)}>
            <option disabled value=''>Selecciona un género</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <input className={style.phone} type="text" name='phone' value={input.phone} onChange={(event) => handleChange(event)} placeholder="Teléfono" />
        </div>
        <button className={style.boton} type='submit'>Actualizar Datos</button>
      </form>
    </div>
  );
};

export default connect(null, { putUser })(FormUpdate);


