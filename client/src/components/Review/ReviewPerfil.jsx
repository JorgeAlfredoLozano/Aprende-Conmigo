import {getReviews, postReview, getAllPurchases} from '../../Redux/actions'
import { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Stars from './Stars';
import style from './ReviewPerfil.module.css';
import PopUp from '../PopUp/PopUp';

const ReviewPerfil =(props)=>{
    const usuario = localStorage.getItem('cachedUser')
    const idUser = JSON.parse(usuario).id;

    const [renderReviewInput, setRenderReviewInput] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [renderPopUp, setRenderPopUp] = useState(false);
    const [text, setText] = useState('')
    const dispatch = useDispatch();

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
            setRenderPopUp(true);
            setText('Ya has creado una reseña para esta publicación.')
          } else if (!purchases.some((item) => item.PublicationId === props.reviewId)) {
            setRenderPopUp(true);
            setText('Debes comprar la clase para dejar una reseña.')
            setRenderReviewInput(false);
          } else {
            setRenderReviewInput(true);
          }
        } else if (boton === 'cancelar') {
          setRenderReviewInput(false);
          setRating(0);
          setComment('');
          props.onCancel();
        } else if (boton === 'comentar') {
          if (purchases.some((item) => item.PublicationId === props.reviewId)) {
            const puntos = rating.toString();
            let idPub=props.reviewId;
            dispatch(postReview(comment, puntos, idPub, idUser));
            setRenderPopUp(true);
            setText('¡Reseña creada con éxito!')
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
              </div>}{renderPopUp && <PopUp setRenderPopUp={setRenderPopUp} renderPopUp={renderPopUp} text={text} setText={setText}/>}
              <div className={style.buttonsContainer}>
            <button className={style.botonReseña} id='renderizar' onClick={(event) => handleReviewComment(event)}>Añadir reseña</button>
            <button id='volver' onClick={(event) => handleReviewComment(event)}>Volver</button>
            </div>
                {renderReviewInput && (
                    <div className={`${style.contenedorComentarioNuevo} ${renderReviewInput ? style.fadeIn : style.fadeOut}`}>
                        <Stars rating={rating} editable={true} onRatingChange={handleRatingChange}/>
                        <textarea className={style.textareaComentario} placeholder='Escribe tu reseña...' id='comment' value={comment} onChange={(event) => handleComment(event)}/>
                        <div className={style.botonesComentarioNuevo}>
                        <button id='comentar' onClick={(event) => handleReviewComment(event)}>Comentar</button>
                        <button id='cancelar' onClick={(event) => handleReviewComment(event)}>Cancelar</button>
                        </div>
                    </div>
                )}
        </div>
 )
}
export default ReviewPerfil;