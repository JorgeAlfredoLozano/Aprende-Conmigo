const {postPurchaseController,cheackoutApi} = require('../../controllers/purchase/postPurchaseController');
const sendmail=require('../../utils/sendmail')

const postPurchaseHandler = async(req,res) => { 
    try {
    const {id,amount,email,datos,idUser,idPub,hora,email2,userName} = req.body
    const payStripe = await cheackoutApi(id,amount);
    const buy = await postPurchaseController(idUser,idPub,hora);
    
    await sendmail('payment',email,datos,email2,userName,hora);
    console.log(userName)
    res.send({message: 'successfull payment'})
    } catch (error) {
        res.json({message:error.message})
    }

};  


module.exports = postPurchaseHandler;