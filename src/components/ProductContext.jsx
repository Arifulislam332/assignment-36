import { createContext, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
  products: [
    {
      id: 1,
      title: "Product One",
      quantity: 10,
    },
    {
      id: 4,
      title: "Product Two",
      quantity: 12,
    },
    {
      id: 3,
      title: "Product Three",
      quantity: 15,
    },
  ],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "BUY":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    case "RESTOCK":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 10 }
            : product
        ),
      };
    case "REMOVE":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={[state, dispatch]}>
      {children}
    </ProductContext.Provider>
  );
};
