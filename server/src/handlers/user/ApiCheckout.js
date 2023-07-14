const Stripe = require('stripe')
const {SENDSTRIPE}=process.env;
const sendmail=require('../../utils/sendmail')
const stripe = new Stripe(`${SENDSTRIPE}`)
const cheackoutApi = async(req,res) => { 
    try {
        const {id,amount,email} = req.body
    
    const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: 'Description',
        payment_method:id,
        confirm:true
    })
    sendmail('payment',email);
    res.send({message: 'successfull payment'})
    } catch (error) {
        res.json({message:error.raw.message})
    }

}
    
module.exports = { 
    cheackoutApi
}