
const FormAnuncio = () => {

    return (
        <form>
            <input
            placeholder='¿Cual es la materia? Ej. Inglés'/>

            <input
            placeholder='Ponle un título a tu publicación'/>

            <textarea
            placeholder='¡Escribe algo para que tus posibles alumnos quieran tomar tu clase!'/>

            <textarea
            placeholder='Cuéntales acerca de ti...'/>

            <div>
            <input placeholder='¿Desde donde brindas tu servicio?'/>
            <label>¿Cual es tu modalidad?</label>
            <label>Puedes elegir más de uno</label>
            <label>Desde casa<input type='checkbox'/></label>
            <label>A domicilio<input type='checkbox'/></label>
            <label>A distancia<input type='checkbox'/></label>
            </div>

            <input placeholder='Tarifa por clase' type='number'/>

            <input placeholder='Tu teléfono para alumnos confirmados'/>
            
        </form>
    )
}

export default FormAnuncio;