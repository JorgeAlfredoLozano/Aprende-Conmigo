import {getReviews, postReview, getAllPurchases} from '../../Redux/actions'
import { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Stars from './Stars';
const Review =({idPub})=>{
    const usuario = localStorage.getItem('cachedUser')
    const idUser = JSON.parse(usuario).id;

    const [renderReviewInput, setRenderReviewInput] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getReviews(idPub));
        dispatch(getAllPurchases(idUser))
    }, [dispatch]);

    const review = useSelector((state)=>state.reviews.data); console.log(review);
    const purchases = useSelector((state)=>state.purchases);

    let promedio = 0;

    if(review){
            
            for (let i = 0; i < review.length; i++) {
              promedio = promedio + review[i].rating
            }
            promedio /= review.length
            promedio.toFixed(1)
        }
    
    const handleReviewComment = (event) => {
        event.preventDefault();
        const boton = event.target.id;

        if (boton === 'renderizar') {
        if (review.map(item => item.UserId.includes(idUser)) === true) {
            alert('Ya has creado una reseña para esta publicación.')
        } else if (purchases.map(item => item.PublicationId).includes(idPub) === false) {
            alert('Debes comprar la clase para dejar una reseña.')
            setRenderReviewInput(false);
        } else {
            setRenderReviewInput(true);
        }
        } else if (boton === 'cancelar') {
            setRenderReviewInput(false)
        } else if (boton === 'comentar') {

            if (purchases.map(item => item.PublicationId).includes(idPub)) {
                const puntos = rating.toString()
                dispatch(postReview(comment, puntos, idPub, idUser));
                alert('¡Reseña creada con éxito!');
                setRenderReviewInput(false);
            }

        }
    }

    const handleRatingChange = (newRating) => {
        setRating(newRating);
      };

    const handleComment = (event) => {
        setComment(event.target.value);
    }
     
    return(
       
        <div >
         
           {review && <div>
                <h1>Reseñas del anuncio:</h1>
                <Stars editable={false} rating={promedio}/>
                <span>{review.length} opiniones</span>
                <button id='renderizar' onClick={(event) => handleReviewComment(event)}>Añadir reseña</button>
                {renderReviewInput && (
                    <div>
                        <textarea placeholder='Escribe tu reseña...' id='comment' value={comment} onChange={(event) => handleComment(event)}/>
                        <Stars rating={rating} editable={true} onRatingChange={handleRatingChange}/>
                        <button id='comentar' onClick={(event) => handleReviewComment(event)}>Comentar</button>
                        <button id='cancelar' onClick={(event) => handleReviewComment(event)}>Cancelar</button>
                    </div>
                )}
            </div>}
            {review && review.map((rev)=>{  
            return (
            <div>
                <img src={rev.User.assets} alt="no image..." />
                <strong>{rev.User.name}</strong>
                 <Stars editable={false} rating={rev.rating}/> 
                <p>{rev.comment}</p>
            </div> 
            )
           
            })}
        </div>
 )
}
export default Review;