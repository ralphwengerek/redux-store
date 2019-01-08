const productReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return state;
    case "ADD_PRODUCT":
      return state;
    default:
      return state;
  }
};

export default productReducer;
