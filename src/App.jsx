import Counter from "./components/Counter";
import EndHooks from "./components/EndHooks";
import { StoreProvider } from "./components/ProductContext";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <StoreProvider>
        <Counter />
        <ProductList />
        <EndHooks/>
      </StoreProvider>
    </div>
  );
};

export default App;
