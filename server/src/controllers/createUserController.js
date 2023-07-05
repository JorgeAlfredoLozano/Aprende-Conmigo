
const {User,Country,Province,City} = require("../db");



const createUserController = async (name,lastName,date,mail,gender,phone,assets,location,certificate) => {
  
    const newUser = await User.create({name,lastName,date,mail,gender,phone,assets,location,certificate})
    for(let prop in  location.results[0]){
    
        if(prop==="address_components"){
         
          for(let i=0; i<location.results[0][prop].length;i++){
            if(location.results[0][prop][i].types[0]==="country"){
            const newCountry= await Country.findOrCreate({
             where:{
            name:location.results[0][prop][i].long_name
                },})
            }
            else if(location.results[0][prop][i].types[0]==="administrative_area_level_1"){
                const newProvince= await Province.findOrCreate({
                where:{
                    name:location.results[0][prop][i].long_name
                },})
            }
            else if(location.results[0][prop][i].types[0]==="locality"){
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
    return newUser;
};


module.exports = createUserController;