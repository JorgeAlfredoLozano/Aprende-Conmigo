const initialState = {
  allInfo:[],
  publication:[],
  lesson:[],
  allPublication:[],
  allAnuncios:[],
  userID: null,
  myFavorites: [] //all favoritos
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
  case 'GET_USER_BY_ID':
    return{
      ...state,
      userID: payload
    }

    //____________________________
    case "ADDFAV": return{
      ...state,
      myFavorites: payload,
    }
    //----------------
    // case "GETALLFAV": return{
    //   ...state,
    //   myFavorites: payload,
    // }
    //-------------------
    // case "REMOVE_FAV": return{
    //   ...state,
    //   myFavorites: payload,
    // }
    //____________________________
  default:
    return { ...state };
  }
};

export default reducer;
