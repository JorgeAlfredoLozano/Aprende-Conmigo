import {getReviews, postReview, getAllPurchases} from '../../Redux/actions'
import { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Stars from './Stars';
import style from './ReviewPerfil.module.css';

const ReviewPerfil =(props)=>{
    const usuario = localStorage.getItem('cachedUser')
    const idUser = JSON.parse(usuario).id;

    const [renderReviewInput, setRenderReviewInput] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
   console.log(props.reviewId);
    useEffect(() => {
        dispatch(getReviews(props.reviewId));
        dispatch(getAllPurchases(idUser))
    }, [dispatch],props.reviewId,idUser);

    const review = useSelector((state)=>state.reviews.data);
    const purchases = useSelector((state)=>state.purchases);
    
    const handleReviewComment = (event) => {
        event.preventDefault();
        const boton = event.target.id;
    
        if (boton === 'renderizar') {
          const hasUserReviewed = review.some(
            (item) => item.UserId === idUser && item.PublicationId === props.reviewId
          );
    
          if (hasUserReviewed) {
            alert('Ya has creado una reseña para esta publicación.');
          } else if (!purchases.some((item) => item.PublicationId === props.reviewId)) {
            alert('Debes comprar la clase para dejar una reseña.');
            setRenderReviewInput(false);
          } else {
            setRenderReviewInput(true);
          }
        } else if (boton === 'cancelar') {
          setRenderReviewInput(false);
          props.onCancel();
        } else if (boton === 'comentar') {
          if (purchases.some((item) => item.PublicationId === props.reviewId)) {
            const puntos = rating.toString();
            let idPub=props.reviewId;
            dispatch(postReview(comment, puntos, idPub, idUser));
            alert('¡Reseña creada con éxito!');
            setRenderReviewInput(false);
            props.onSubmit();
          }
        } else if (boton === 'volver') {
          props.setRenderReview(false);
        }
      };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
      };

    const handleComment = (event) => {
        setComment(event.target.value);
    }
     
    return(
        <div className={`${style.container} ${props.isVisible ? style.fadeIn : style.fadeOut}`} >
         
            {review && review.map((rev)=>{
              const containerStyle = {
                backgroundImage: `url(${rev && rev.User.assets})`,
              }; 
            return (
            <div className={style.reviewsContainer}>
              <h4 className={style.texto}>Reseña</h4>
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
            })}{review && review.length === 0 && <div className={style.reviewsContainer}>
              <h4 className={style.texto}>Reseña</h4>
              <div className={style.commentContainer}>
              <div className={style.cardComment}>
              <p className={style.noReview}>Aún no has creado una reseña para este anuncio.</p>
              </div>
              </div>
              </div>}
              <div className={style.buttonsContainer}>
            <button className={style.botonReseña} id='renderizar' onClick={(event) => handleReviewComment(event)}>Añadir reseña</button>
            <button id='volver' onClick={(event) => handleReviewComment(event)}>Volver</button>
            </div>
                {renderReviewInput && (
                    <div>
                        <textarea placeholder='Escribe tu reseña...' id='comment' value={comment} onChange={(event) => handleComment(event)}/>
                        <Stars rating={rating} editable={true} onRatingChange={handleRatingChange}/>
                        <button id='comentar' onClick={(event) => handleReviewComment(event)}>Comentar</button>
                        <button id='cancelar' onClick={(event) => handleReviewComment(event)}>Cancelar</button>
                    </div>
                )}
        </div>
 )
}
export default ReviewPerfil;