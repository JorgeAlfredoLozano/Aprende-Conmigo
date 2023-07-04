import React, {useState} from "react";

const FormAnuncio = () => {

    const [formData, setFormData] = useState({
        materia: '',
        titulo: '',
        descripcion: '',
        acercadeti: '',
        localidad: '',
        modalidad: [],
        tarifa: '',
        telefono: ''
      });

      const handleAñadirModalidad = (modalidad) => {
    
        setFormData((prevFormData) => ({
          ...prevFormData,
          modalidad: [...prevFormData.modalidad]
        }));
      };

    return (
        <form>
            <input
            onChange={handleInputChange}
            placeholder='¿Cual es la materia? Ej. Inglés'/>

            <input
            onChange={handleInputChange}
            placeholder='Ponle un título a tu publicación'/>

            <textarea
            onChange={handleInputChange}
            placeholder='¡Escribe algo para que tus posibles alumnos quieran tomar tu clase!'/>

            <textarea
            onChange={handleInputChange}
            placeholder='Cuéntales acerca de ti...'/>

            <select
            name='modalidades'
            value={''}
            onChange={(event) => handleAñadirModalidad(event.target.value)}
            >
            <option value=''>Selecciona tu modalidad</option>
            {tiposModalidad.map((modalidad) => (
            <option key={modalidad.id} value={modalidad.name}>
            {modalidad.name}
            </option>
            ))}
            </select>

            <input 
            onChange={handleInputChange}
            placeholder='Tarifa por clase' type='number'/>

            <input 
            onChange={handleInputChange}
            placeholder='Tu teléfono para alumnos confirmados'/>

        </form>
    )
}

export default FormAnuncio;