const initialState = {
  user: []
  };

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
  case "PUT_USER":
    return{
      ...state,
      user: [payload]
    }

  default:
    return { ...state };
  }
};

export default reducer;
