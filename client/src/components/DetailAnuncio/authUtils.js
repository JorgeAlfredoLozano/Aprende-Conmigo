// funcion para verificar si el estado local tiene usuario autenticado o no.

export const isUserLoggedIn = () => {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser !== null; // Devuelve true si el usuario está logueado, de lo contrario, false.
  };
  