const initialState = {
  allInfo:[]
  };

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
  case "PUT_USER":
  return{
      ...state
    } 
    case "GET_USER":
      return{
          ...state,
          allInfo: payload,
        }   
  default:
    return { ...state };
  }
};

export default reducer;
