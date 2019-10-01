

const fetchProducts = () => ({
    type: "FETCH_PRODUCTS",
  });

const fetchProduct = (id) => ({
    type: "FETCH_PRODUCTS",
    id,
  });

const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  payload: product,
});

export {
  addProduct,
  fetchProducts,
  fetchProduct,
};