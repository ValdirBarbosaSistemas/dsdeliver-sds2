import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[]
}

function ProductsList({ products }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {/* <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> */}
                {products.map(product => (<ProductCard key={product.id} product={product} />))}
                {/*Mesma maneira do código acima, ITERANDO*/}
            </div>
        </div>
    )
}
export default ProductsList;
//PARA FAZER REQUISIÇÕES PARA O BACKEND USAREMOS O 'AXIOS'