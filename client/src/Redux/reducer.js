const initialState = {
  allInfo:[],
  publication:[],
  lesson:[]
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
  case "UPDATE_ANUNCIO":
  return {
      ...state
    }
  case "GET_LESSON":
  return{
      ...state,
      lesson: payload,
    }      
  default:
    return { ...state };
  }
};

export default reducer;
