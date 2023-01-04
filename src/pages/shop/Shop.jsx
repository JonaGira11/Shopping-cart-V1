import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./shop.css"


const Shop = () => {
  return (
    <div className="shop">
      <div>
        <h1>Jon's Shop</h1>
        
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>

      
    </div>
  );
};

export default Shop;
