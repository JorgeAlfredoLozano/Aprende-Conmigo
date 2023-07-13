const ValidationsAnuncio = (input) => {
    const errors = {}

    if (input.about_class && input.about_class.length > 500) {
        errors.about_class = 'Máximo 500 caracteres.'
    };

    if (input.about_teacher && input.about_teacher.length > 500) {
        errors.about_teacher = 'Máximo 500 caracteres.'
    };

    if (input.title && input.title.length > 150) {
        errors.title = 'Máximo 150 caracteres.'
    };

    if ('about_class' in input === false || input.about_class === '') {
        errors.about_class = 'Debes completar este campo.'
    };

    if ('about_teacher' in input === false || input.about_teacher === '') {
        errors.about_teacher = 'Debes completar este campo.'
    };

    if ('title' in input === false || input.title === '') {
        errors.title = 'Debes completar este campo.'
    };

    if (!input.lesson_name) {
        errors.lesson_name = 'Debes seleccionar al menos una materia.'
    };

    if (input.value && input.value <= 0) {
        errors.value = 'El valor no puede ser 0 ni menor que 0.'
    };

    if (input.value && input.value > 100) {
        errors.value = 'Máximo 100.'
    };

    if (input.grade === undefined || input.grade.length === 0) {
        errors.grade = 'Debes seleccionar al menos 1 nivel.'
    }

return errors;
}

export default ValidationsAnuncio;