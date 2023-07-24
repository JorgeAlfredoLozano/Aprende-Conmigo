const initialState = {
  allInfo:[],
  publication:[],
  lesson:[],
  allPublication:[],
  allAnuncios:[],
  todos:[],
  userID: null,
  messages:[],
  messagesNR:[],
  purchases:[],
  sales:[],
  reviews:[],
  allUsers:[],
  allUserEmail:[]
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
    // todos:[...allAnuncios]
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
  case "GET_NOT_READ": 
  return{
    ...state,
    messagesNR: payload,
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
      case "PUT_USER_EMAIL": 
      return{
        ...state,
          }
      case "GET_ALL_USERS": 
          return{
            ...state,
            allUsers: payload,
            }
  default:
    return { ...state };
  }
};

export default reducer;
