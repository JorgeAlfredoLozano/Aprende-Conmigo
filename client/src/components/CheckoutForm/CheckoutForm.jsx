import "bootswatch/dist/lux/bootstrap.min.css"
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from 'axios'
import { useParams,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {useState} from 'react';
import style from './CheckoutForm.module.css';
const VITE_API_STRIPE=import.meta.env.VITE_API_STRIPE;

let email = 'none';
let email2 = 'none';
let userName ='none';
let idUs=0;

const stripePromise = loadStripe(`${VITE_API_STRIPE}`);
const localStorageContent = localStorage.getItem("cachedUser")
const parser  = JSON.parse(localStorageContent);

if(parser)email=parser.email;
if(parser)userName=parser.name;
if(parser)idUs=parser.id;

const CheckoutForm = ({ setShowCheckoutForm }) => {
const stripe = useStripe();
const elements = useElements();
const navigate = useNavigate();

const params = useParams();
const idPub = params.id;
const info=useSelector((state)=>state.allAnuncios.data);
const infoFiltered=info.filter((inf)=> inf.id===idPub);

email2=infoFiltered[0].User.email; //email profesor
const [horas,setHoras]=useState(1);
const number=[1,2,3,4,5,6,7,8,9,10];

const handleSelect=async (event)=>{  
    setHoras(event.target.value);
}

const handleSubmit = async (event) => { 
event.preventDefault()
const {error, paymentMethod} = await stripe.createPaymentMethod({
    type:'card',
    card:elements.getElement(CardElement)
})
if(!error) { 

const {id} = paymentMethod || 0
const {data} = await axios.post('/purchase/', {
    id,
    amount:infoFiltered[0].value * horas * 100,
    email,
    email2,
    datos: infoFiltered[0],
    idUser: idUs,
    idPub: idPub,
    hora: horas,
    userName,
})

elements.getElement(CardElement).clear()
if(data.message==="successfull payment"){
    alert('pago realizado con exito');
    setShowCheckoutForm(false);
    navigate('/')
}
else {
    alert('pago rechazado')
}
}}
return( 

    <div className={style.container}>    
    <form onSubmit={handleSubmit} className="card card-body">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png" alt="imagenn" className="img-fluid"/>
    <h3 className="text-center my-2">Detalles de la compra: </h3>
    <p>Precio por Hora:{infoFiltered[0].value}$ </p>
    <p>Cantidad de Horas: <select onChange={handleSelect}>
    {number.map((num)=> <option value={num}>{num} 
    </option>)}
    </select>
    </p>
    <p>Total a pagar: {infoFiltered[0].value * horas}$</p>
    <div className="form-group">
        <CardElement className="form-control" options={{ style: { base: { fontSize: '16px' } } }}/> 
    </div>   
    <button  className="btn btn-success" disabled={!stripe}>Comprar</button>
    {/* <button>Cancelar</button> */}
    </form>
    </div>
)}

function Checkout() {

return (
    <>
    <Elements stripe={stripePromise}>
    <div className={style.container}>
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
