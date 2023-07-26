import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendAnuncio, getLesson } from '../../Redux/actions';
import Select from 'react-select';
import style from './FormAnuncio.module.css';
import ValidationsAnuncio from '../Validations/ValidationsAnuncio';

const FormAnuncio = (props) => {
  const email = localStorage.getItem("currentUser");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLesson());
  }, [dispatch]);

  const materias = useSelector((state) => state.lesson);
  const options = materias.map((aux) => ({ value: aux.id, label: aux.lesson_name }));
  const sortOptions = options.sort((a, b) => a.label.localeCompare(b.label));
  const [input, setInput] = useState({});
  const [grades, setGrades] = useState({});
  const selectedBtnsRef = useRef([]);
  const selectedBtns = selectedBtnsRef.current;
  const [errors, setErrors] = useState({});
  
  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
      grade: grades.grade,
    }));
  
    const validationErrors = ValidationsAnuncio({
      ...input, // Usa el estado actualizado en lugar de prevState
      [name]: value,
      grade: grades.grade
    });
    setErrors(validationErrors);
  }  

  function handleSelect(event) {
    setInput((prevState) => ({
      ...prevState,
      lesson_name: event.label,
    }));

    const validationErrors = ValidationsAnuncio({
      ...input,
      lesson_name: event.label,
      grade: grades.grade
    });
    setErrors(validationErrors);
  };

  const seleccionarBoton = (boton) => {
    if (selectedBtns.includes(boton)) {
      // Si el botón ya está seleccionado, lo elimino del array
      const updatedBtns = selectedBtns.filter((btn) => btn !== boton);
      selectedBtnsRef.current = updatedBtns;
    } else {
      // Si el botón no está seleccionado, lo agrego al array
      selectedBtnsRef.current = [...selectedBtns, boton];
    }

    const updatedGrades = {
      grade: selectedBtnsRef.current.sort(ordenarBotones),
    };
    setGrades(updatedGrades);
    setInput((prevState) => ({
      ...prevState,
      grade: updatedGrades.grade,
    }));

    const validationErrors = ValidationsAnuncio({
      ...input,
      grade: updatedGrades.grade,
      lesson_name: input.lesson_name
    });
    setErrors(validationErrors);
  };

  const ordenarBotones = (a, b) => {
    const orden = ['Primaria', 'Secundaria', 'Universidad'];
    return orden.indexOf(a) - orden.indexOf(b);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = ValidationsAnuncio(input);
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      // Realizar modificaciones en el objeto input antes del dispatch
      const modifiedInput = {
        ...input,
        grade: input.grade.join(','), // Convertir el array de grade en un string separado por comas
        value: Number(input.value) // Convertir el valor de value a tipo number
      };
      
      dispatch(sendAnuncio(email, modifiedInput));
      props.onSubmit();
      props.setRenderPopUp(true);
      props.setText('¡Anuncio creado exitosamente!');
      // alert("¡Anuncio creado exitosamente!");
      setInput({});
      selectedBtnsRef.current = []; // Restablecer los botones seleccionados después de enviar el formulario
    } else {
      props.setRenderPopUp(true);
      props.setText('El formulario contiene errores. Por favor, verifica los campos.');
      // alert("El formulario contiene errores. Por favor, verifica los campos.");
    }
  };  

  const handleCancel = () => {
    props.onCancel();
  };

  return (
    <div className={`${style.x} ${props.isVisible ? style.fadeIn : style.fadeOut}`}>
      <form className={style.container} onSubmit={handleSubmit}>

        <div className={style.boxa}>
          <div className={style.titulo}>
          <label className={style.label}> Título: </label>
          <input placeholder=' Ej. Clases de inglés TOEFL...' type="text" name="title" onChange={handleChange} />
          {errors.title && <span className={style.error}>{errors.title}</span>}
          </div>

          <div className={style.aboutclass}>
          <label className={style.label}> Acerca De La Clase: </label>
          <textarea placeholder=' Ej. Taller de Álgebra Lineal para...' className={style.textarea} name="about_class" onChange={handleChange} />
          {errors.about_class && <span className={style.error}>{errors.about_class}</span>}
          </div>

          <div className={style.abouteacher}>
          <label className={style.label}> Acerca Del Profesor: </label>
          <textarea placeholder=' Ej. Estudiante avanzado de biología, ofrezco un enfoque actualizado...' className={style.textarea} name="about_teacher" onChange={handleChange} />
          {errors.about_teacher && <span className={style.error}>{errors.about_teacher}</span>}
          </div>
        </div>

        <div className={style.boxb}>

        <div className={style.grades} role="group" aria-label="Basic checkbox toggle button group">
          {/*CHECKBOX GRADE */}
          <label> Nivel: </label>
          {errors.grade && <span className={style.error}>{errors.grade}</span>}
          <div className={style.gradesbuttons}>
          <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" onClick={() => seleccionarBoton("Primaria")} />
          <label className={"btn btn-outline-primary" + (selectedBtns.includes("Primaria") ? " seleccionado" : "")} htmlFor="btncheck1">Primaria</label>

          <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" onClick={() => seleccionarBoton("Secundaria")} />
          <label className={"btn btn-outline-primary" + (selectedBtns.includes("Secundaria") ? " seleccionado" : "")} htmlFor="btncheck2">Secundaria</label>

          <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" onClick={() => seleccionarBoton("Universidad")} />
          <label className={"btn btn-outline-primary" + (selectedBtns.includes("Universidad") ? " seleccionado" : "")} htmlFor="btncheck3">Universidad</label>
          </div>
        </div>

        <div className={style.materias}>
          {/*SELECT MATERIAS */}
          <label className={style.label}> Materia: </label>
          {errors.lesson_name && <span className={style.error}>{errors.lesson_name}</span>}
          <Select placeholder='Elije una materia...' className={style.select} options={sortOptions} isSearchable={true} onChange={handleSelect}></Select>
        </div>

        <div className={style.price}>
        <label className={style.label}> Precio: </label>
        <input  placeholder='  $ por hora' type="number" name="value" onChange={handleChange} />
        {errors.value && <span className={style.error}>{errors.value}</span>}
        </div>

        <div className={style.formbuttons}>
        <button type="submit">Crear Anuncio</button>
        <button type="button" className={style.cancelar} onClick={handleCancel}>Cancelar</button>
        </div>
        </div>

      </form>
    </div>
  );
};

export default FormAnuncio;
