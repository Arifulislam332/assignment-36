import { useContext } from "react";
import { ProductContext } from "../components/ProductContext";

const ProductList = () => {
  const [state, dispatch] = useContext(ProductContext);
  return (
    <div className="px-20">
      <h2 className="text-2xl font-medium mb-3">Product list</h2>
      {state.products.length > 0 && (
        <ul className="flex flex-col gap-5">
          {state.products.map((product) => (
            <li key={product.id}>
              <h3 className="text-xl font-semibold">
                {product.title} (Qty. {product.quantity})
              </h3>
              <div className="flex items-center gap-5 mt-5">
                {product.quantity > 0 && (
                  <button
                    onClick={() =>
                      dispatch({ type: "BUY", payload: product.id })
                    }
                    className="bg-black text-white text-xl font-medium px-4 py-2 rounded-lg active:bg-black/80"
                  >
                    Buy
                  </button>
                )}
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE", payload: product.id })
                  }
                  className="bg-black text-white text-xl font-medium px-4 py-2 rounded-lg active:bg-black/80"
                >
                  Remove
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "RESTOCK", payload: product.id })
                  }
                  className="bg-black text-white text-xl font-medium px-4 py-2 rounded-lg active:bg-black/80"
                >
                  Restock
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {state.products.length < 1 && (
        <p className="font-medium text-black/60">Empty Products!</p>
      )}
    </div>
  );
};

export default ProductList;
