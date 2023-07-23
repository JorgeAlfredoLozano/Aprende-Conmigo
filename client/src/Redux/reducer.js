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
      myFavorites: [...state.myFavorites, payload]
    }
    //----------------
    case "GETALLFAV":
       return{
      ...state,
      myFavorites:  payload
    }
    //-------------------
    case "REMOVE_FAV":

      // Encuentra el índice del favorito en myFavorites que tiene el PublicationId igual al payload
      const favIndex = state.myFavorites.findIndex((fav) => fav.PublicationId === payload)
      if (favIndex !== -1) {
        // Crea una nueva copia de myFavorites sin el favorito que coincide con el PublicationId
        const newFavorites = [...state.myFavorites.slice(0, favIndex), ...state.myFavorites.slice(favIndex + 1)];
    return{
      ...state,
      myFavorites: newFavorites
    }
  }
    //____________________________
  default:
    return { ...state };
  }
};

export default reducer;
