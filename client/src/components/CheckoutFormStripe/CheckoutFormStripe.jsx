import "bootswatch/dist/lux/bootstrap.min.css"
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from 'axios'



const stripePromise = loadStripe("pk_test_51NSJ1MEqVxv7pAKJSd5oZL8wBvsgvPm83YP66SNomXMyU0tK615q9dNybMwth474aX435OiMPAq3JiVVYXHA4D1v007Ku2489r")


const CheckoutForm = () => { 

const stripe = useStripe()
const elements = useElements()






const handleSubmit = async (event) => { 
event.preventDefault()



const {error, paymentMethod} = await stripe.createPaymentMethod({
    type:'card',
    card:elements.getElement(CardElement)
})


if(!error) { 
const {id} = paymentMethod
const {data} = await axios.post('http://localhost:3001/user/api/checkout', {
    id,
    amount:10000
})
console.log(data)
elements.getElement(CardElement).clear()
}

}




return( 
    <form onSubmit={handleSubmit} className="card card-body">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png" alt="imagenn" className="img-fluid"/>
    <h3 className="text-center my-2">Monto A pagar: </h3>
    
    <div className="form-group">
        <CardElement className="form-control" options={{ style: { base: { fontSize: '16px' } } }}/> 
    </div>
    
    
    <button  className="btn btn-success" disabled={!stripe}>buy</button>
    </form>
)
}




function Checkout() {


return (
    <>
    <Elements stripe={stripePromise}>
    <div className="container p-4">
        <div className="row">
        <div className=".col-md-4.offset-md-4">
        <CheckoutForm/>
        </div>
        </div>
    </div>
    </Elements>
    </>
)
}

export default Checkout
