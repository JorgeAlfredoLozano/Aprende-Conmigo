const initialState = {
  };

const reducer = (state = initialState, {type, payload}) => {
  switch (action.type) {
  case "PUT_USER":
    return{
      ...state
    }
 
  default:
    return { ...state };
  }
};

export default reducer;
