const {postPurchaseController,cheackoutApi} = require('../../controllers/purchase/postPurchaseController');
const sendmail=require('../../utils/sendmail')

const postPurchaseHandler = async(req,res) => { 
    try {
    const {id,amount,email,datos,idUser,idPub,hora} = req.body
    const payStripe = await cheackoutApi(id,amount,email,datos);
    const buy = await postPurchaseController(idUser,idPub,hora);
    
    await sendmail('payment',email,datos);
    res.send({message: 'successfull payment'})
    } catch (error) {
        res.json({message:error.message})
    }

};  


module.exports = postPurchaseHandler;