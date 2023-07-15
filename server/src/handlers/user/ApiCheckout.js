const Stripe = require('stripe')
const {SENDSTRIPE}=process.env;
const sendmail=require('../../utils/sendmail')
const stripe = new Stripe(`${SENDSTRIPE}`)
const cheackoutApi = async(req,res) => { 
    try {
        const {id,amount,email,datos} = req.body
    console.log(amount,datos)
    const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: 'Description',
        payment_method:id,
        confirm:true
    })
    await sendmail('payment',email,datos);
    res.send({message: 'successfull payment'})
    } catch (error) {
        res.json({message:error.raw.message})
    }

}
    
module.exports = { 
    cheackoutApi
}