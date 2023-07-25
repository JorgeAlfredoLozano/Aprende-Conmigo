import { putUser } from '../../Redux/actions';
import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import style from './FormUpdate.module.css';
import ValidationsPerfil from '../Validations/ValidationsPerfil';

const FormUpdate = (props) => {
  const email = localStorage.getItem("currentUser");
  const parser=localStorage.getItem("cachedUser");
  const infoUser=JSON.parse(parser);
  
  const dispatch = useDispatch();
  
  const [input, setInput] = useState({
    name: infoUser.name || '',
    date: infoUser.date || '',
    gender: infoUser.gender || '',
    phone: infoUser.phone || ''
  });
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });

    const validationErrors = ValidationsPerfil({
      ...input,
      [event.target.name]: event.target.value
    });
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = ValidationsPerfil(input);

    if (Object.keys(validationErrors).length === 0) {
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
        props.setRenderPopUp(true);
        props.setText('¡Tus datos han sido actualizados correctamente!');
        // alert("¡Tus datos han sido actualizados correctamente!");
        setInput({
          name: '',
          date: '',
          gender: '',
          phone: ''
        });
        setErrors({});
      } else {
        props.setRenderPopUp(true);
        props.setText('Completa al menos un campo antes de enviar.');
        // alert("Completa al menos un campo antes de enviar.");
      }
    } else {
      props.setRenderPopUp(true);
      props.setText('El formulario contiene errores. Por favor, verifica los campos.');
      // alert("El formulario contiene errores. Por favor, verifica los campos.");
    }
  }

  const handleCancel = () => {
    props.onCancel();
  };

  return (
    <div className={`${style.formu} ${props.isVisible ? style.fadeIn : style.fadeOut}`}>
      <form className={style.weas} onSubmit={(event) => handleSubmit(event)}>
        <div>
          <input className={style.name} type="text" name='name'  value={input.name} onChange={(event) => handleChange(event)} placeholder="  Nombre"/>
          {errors.name && <span className={style.error}>{errors.name}</span>}
        </div>
        <div>
          <input className={style.date} type="date" name='date' value={input.date} onChange={(event) => handleChange(event)}/>
        </div>
        <div>
          <select className={style.gender} name='gender' value={input.gender} onChange={(event) => handleChange(event)}>
            <option disabled value=''>Selecciona un género</option>
            <option value="male">Hombre</option>
            <option value="female">Mujer</option>
            {/* <option value="other">No binario</option> */}
            <option value="other">Otro</option>
          </select>
        </div>
        <div>
          <input className={style.phone} type="text" name='phone' value={input.phone} onChange={(event) => handleChange(event)} placeholder="  Teléfono"/>
          {errors.phone && <span className={style.error}>{errors.phone}</span>}
        </div>
        <button className={style.boton} type='submit'>Actualizar Datos</button>
      </form>
      <div className={style.cancelar} >
      <button onClick={handleCancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default connect(null, { putUser })(FormUpdate);
