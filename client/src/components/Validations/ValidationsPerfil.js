const ValidationsPerfil = (input) => {
    const errors = {}

    const regex = /^[0-9]*$/;

    if (input.name && input.name.length > 40) {
        errors.name = 'Máximo 100 caracteres'
    };

    if (input.phone && !input.phone.match(regex)) {
        errors.phone = 'Este campo solo acepta números'
    };

return errors;
}

export default ValidationsPerfil;