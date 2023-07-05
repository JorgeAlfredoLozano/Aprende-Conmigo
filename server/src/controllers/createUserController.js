
const {User,Country,Province,City} = require("../db");



// Controlador para crear un nuevo usuario
const createUserController = async (name,lastName,date,mail,gender,phone,assets,location,certificate) => {

     // Crea un nuevo usuario en la tabla "User" utilizando los parámetros proporcionados
    const newUser = await User.create({name,lastName,date,mail,gender,phone,assets,location,certificate})
    for(let prop in  location.results[0]){
    
        if(prop==="address_components"){
        
        for(let i=0; i<location.results[0][prop].length;i++){
            if(location.results[0][prop][i].types[0]==="country"){

                 // Crea un nuevo país en la tabla "Country" si no existe
            const newCountry= await Country.findOrCreate({
            where:{
            name:location.results[0][prop][i].long_name
                },})
            }

            else if(location.results[0][prop][i].types[0]==="administrative_area_level_1"){
                
                // Crea una nueva provincia en la tabla "Province" si no existe
                const newProvince= await Province.findOrCreate({
                where:{
                    name:location.results[0][prop][i].long_name
                },})
            }

            else if(location.results[0][prop][i].types[0]==="locality"){
                
                // Crea una nueva ciudad en la tabla "City" si no existe
            const newCity= await City.findOrCreate({
                where:{
                    name:location.results[0][prop][i].long_name
                },})
            }
            }
        }
        }
    
            
    // 3 y 4 calle y numero 
    // 5 y 6 apartamento y piso
    return newUser; // Devuelve el nuevo usuario creado
};


module.exports = createUserController;  // Exporta el controlador para que pueda ser utilizado en otros módulos