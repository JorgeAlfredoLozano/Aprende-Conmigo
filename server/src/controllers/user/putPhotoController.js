const {User}=require('../../db')

const putPhotoController=async(assets,email)=>{
   
    const newPhoto= await User.update({assets},{where:{email:email}});       
    if(newPhoto) return newPhoto;
    else throw new Error('no se encontro un email valido');    
  }; 

module.exports = putPhotoController;


