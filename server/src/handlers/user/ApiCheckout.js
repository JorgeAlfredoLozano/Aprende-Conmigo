const Stripe = require('stripe')


const stripe = new Stripe('sk_test_51NSJ1MEqVxv7pAKJ0U8f7kuyQJBwBMVsOdwoOA5zxVpwYPTcRwJU2CWUSCmZmbmG90mw8Ay5f0zOfxupWLpMR92200lgQ51Weo')
const cheackoutApi = async(req,res) => { 
    try {
        const {id,amount} = req.body
    
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
        res.json({message:error.message})
    }

}
    
module.exports = { 
    cheackoutApi
}