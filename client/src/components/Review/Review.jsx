import {getReviews} from '../../Redux/actions'
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Stars from './Stars';
const Review =({idPub})=>{
    console.log(idPub)
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getReviews(idPub));
    }, [dispatch]);

    const review = useSelector((state)=>state.reviews.data)
    console.log(review)
        let promedio=0;
    if(review){
            
            for (let i = 0; i < review.length; i++) {
              promedio = promedio + review[i].rating
            }
            promedio /= review.length
            promedio.toFixed(1)
            console.log(promedio)
        }
     
     
    return(
       
        <div >
         
           {review && <div>
                <h1>RESEÑAS DEL AVISO</h1>
                <Stars rating={promedio}/>
                <span>{review.length} opiniones</span>
            </div>}
            {review && review.map((rev)=>{  
            return (
            <div>
                <img src={rev.User.assets} alt="no image..." />
                <strong>{rev.User.name}</strong>
                 <Stars rating={rev.rating}/> 
                <p>{rev.comment}</p>
            </div> 
            )
           
            })}
        </div>
 )
}
export default Review;