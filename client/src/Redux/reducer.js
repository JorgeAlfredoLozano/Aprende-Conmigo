const initialState = {
  allInfo:[],
  publication:[],
  lesson:[],
  allPublication:[],
  allAnuncios:[],
  userID: null,
  messages:[],
  purchases:[],
  sales:[],
<<<<<<< HEAD
  allUsers:[],
=======
  reviews:[]
>>>>>>> 3101101519b1a58f68243c5752676d74959d3c9e
  };

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
  case "PUT_USER":
  return{
      ...state,
      allInfo:payload
    } 
  case "SEND_PHOTO":
  return{
      ...state,
      user: payload,   
    }
  case "GET_USER":
  return{
      ...state,
      allInfo: payload,
    }   
  case "SEND_ANUNCIO":
  return{
      ...state,
      publication: payload,
    }
  case "GET_LESSON":
  return{
      ...state,
      lesson: payload,
    }     
  case "GET_ALL_PUBLICATION": 
  return{
    ...state,
    allPublication: payload,
    }
  case "GET_ALL_ANUNCIOS": 
  return{
    ...state,
    allAnuncios: payload,
    }
    case "GET_ALL_USERS": 
    return{
      ...state,
      allUsers: payload,
      }
  case 'GET_USER_BY_ID':
    return{
      ...state,
      userID: payload
    }
  case "GET_ALL_MESSAGES": 
  return{
    ...state,
    messages: payload,
    }
  case "PUT_SEEN": 
  return{
    ...state,
      }
  case 'GET_ALL_PURCHASES':
    return{
      ...state,
      purchases: payload,
    } 
    case 'GET_ALL_SALES':
    return{
      ...state,
      sales: payload,
    }  
    case 'GET_REVIEWS':
      return{
        ...state,
        reviews: payload,
      }
    case 'POST_REVIEW':
      return {
        ...state,
        reviews: payload,
      }
  default:
    return { ...state };
  }
};

export default reducer;
