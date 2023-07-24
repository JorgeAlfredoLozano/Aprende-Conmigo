import {getReviews, postReview, getAllPurchases} from '../../Redux/actions'
import { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Stars from './Stars';
import style from './Review.module.css';

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

    const review = useSelector((state)=>state.reviews.data);
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
          const hasUserReviewed = review.some(
            (item) => item.UserId === idUser && item.PublicationId === idPub
          );
    
          if (hasUserReviewed) {
            alert('Ya has creado una reseña para esta publicación.');
          } else if (!purchases.some((item) => item.PublicationId === idPub)) {
            alert('Debes comprar la clase para dejar una reseña.');
            setRenderReviewInput(false);
          } else {
            setRenderReviewInput(true);
          }
        } else if (boton === 'cancelar') {
          setRenderReviewInput(false);
          setRating(0);
          setComment('')
        } else if (boton === 'comentar') {
          if (purchases.some((item) => item.PublicationId === idPub)) {
            const puntos = rating.toString();
            dispatch(postReview(comment, puntos, idPub, idUser));
            alert('¡Reseña creada con éxito!');
            setRenderReviewInput(false);
          }
        }
      };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
      };

    const handleComment = (event) => {
        setComment(event.target.value);
    }
     
    return(
       
        <div className={style.container}>
         
           {review && <div className={style.boxa}>
                <h4 className={style.valoracion}>Valoración</h4>
                <Stars editable={false} rating={promedio}/>
                <span className={style.opiniones}>{review.length} opiniones</span>
            </div>}
            {review && review.map((rev)=>{
              const containerStyle = {
                backgroundImage: `url(${rev && rev.User.assets})`,
              };   
            return (
            <div className={style.reviewsContainer}>
              <h4>Reseñas</h4>
              <div className={style.commentContainer}>
                <div className={style.cardComment}>
                  <div className={style.imageContainer}>
                  <div className={style.image} style={containerStyle}></div>
                </div>
                <div className={style.textoContainer}>
                <p className={style.name}>{rev.User.name}</p>
                 <Stars editable={false} rating={rev.rating}/> 
                <p className={style.comment}>{rev.comment}</p>
                </div>
                </div>
                </div>
            </div> 
            )   
            })}
            <button className={style.botonReseña} id='renderizar' onClick={(event) => handleReviewComment(event)}>Añadir reseña</button>
                {renderReviewInput && (
                    <div className={style.ratingContainer}>
                        <span>¡Recuerda puntuar con unas estrellas!</span>
                        <Stars rating={rating} editable={true} onRatingChange={handleRatingChange}/>
                        <textarea className={style.textareaComment} placeholder=' Escribe tu reseña...' id='comment' value={comment} onChange={(event) => handleComment(event)}/>
                        <div className={style.botones}>
                        <button id='comentar' onClick={(event) => handleReviewComment(event)}>Comentar</button>
                        <button id='cancelar' onClick={(event) => handleReviewComment(event)}>Cancelar</button>
                        </div>
                    </div>
                )}
        </div>
 )
}
export default Review;