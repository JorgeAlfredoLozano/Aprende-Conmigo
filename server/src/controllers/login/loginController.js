const {User}= require('../../db');

const loginInController = async (username, password)=>{
    const user = await User.findOne({ username });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return "Credenciales inválidas." 
  } else{
    return user;
  }
}
module.exports = loginInController;