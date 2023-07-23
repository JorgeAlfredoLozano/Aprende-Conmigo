const {Purchase, Publication,User} = require('../../db');
const Stripe = require('stripe')
const {SENDSTRIPE}=process.env;
const stripe = new Stripe(`${SENDSTRIPE}`)

const cheackoutApi = async(id,amount) => { 
    const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: 'Description',
        payment_method:id,
        confirm:true
    })
    return payment;
 };

const postPurchaseController = async (idUser,idPub,hora) => {
    const buy = await Purchase.create({hora});
    const newName = await User.findOne({where: {id: idUser}});
    // RELACION UNO-MUCHOS
    await newName.addPurchase(buy);
    const newPub = await Publication.findOne({where:{id:idPub}});
    await newPub.addPurchase(buy);
};

module.exports = { 
    cheackoutApi,
    postPurchaseController
}