const initialState = {
  allInfo:[],
  publication:[],
  lesson:[],
  allPublication:[],
  allAnuncios:[]
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
  default:
    return { ...state };
  }
};

export default reducer;
