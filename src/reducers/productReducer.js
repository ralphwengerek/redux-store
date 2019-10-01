const productReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return [...state];
    case "FETCH_PRODUCT":
      return state.find(item => item.id === action.id);
    case "ADD_PRODUCT":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default productReducer;
