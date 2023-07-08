const initialState = {
  allInfo:[],
  publication:[]
  };

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
  case "PUT_USER":
  return{
      ...state,
      allInfo: payload,   
    } 
  case "SEND_PHOTO":
  return{
      ...state,
      user: payload,   
    } 
  case "SEND_PHOTO":
  return{
      ...state
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
  default:
    return { ...state };
  }
};

export default reducer;
