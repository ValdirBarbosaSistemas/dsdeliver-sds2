import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[]
    onSelectProduct: (product: Product) => void
    selectedProducts: Product[]
}

function ProductsList({ products, selectedProducts, onSelectProduct }: Props) {
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
                {products.map(product => (<ProductCard key={product.id}
                    product={product} onSelectProduct={onSelectProduct} isSelected={checkIsSelected(selectedProducts, product)} />))}
                {/*Mesma maneira do código acima, ITERANDO*/}
            </div>
        </div>
    )
}
export default ProductsList;
//PARA FAZER REQUISIÇÕES PARA O BACKEND USAREMOS O 'AXIOS'