import {getReviews} from '../../Redux/actions'
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';


const Review =({idPub})=>{
    console.log(idPub)
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getReviews(idPub));
    }, [dispatch]);

    const review = useSelector((state)=>state.reviews.data)
    console.log(review)
    
    return(
        <div >
            <div></div>
            {review[0] && review.map((rev)=>{  
            return (
            <div>
                <img src={rev.User.assets} alt="no image..." />
                <strong>{rev.User.name}</strong>
                {}

            </div>
            )
           
            })}
            
         hsbhdfjanfjknakjfnajkfnasjkfnasdjkfbasdjkfbjknb
         sdjkfbhsdakjgsdjkgnsdkfdsbfhlsdbf
         sdbglasdjkbgasdjibg
        </div>
 )
}
export default Review;