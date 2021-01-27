// import { ReactComponent as Pizza } from './pizzacalabresaacebolada 1.svg';
import { formatPrice } from './helpers';
import { Product } from './types';

//Adicionando os produtos de forma DINÂMICA

type Props = {
    product: Product
    onSelectProduct: (product: Product) => void
    isSelected: boolean
}

function ProductCard({ product, onSelectProduct, isSelected }: Props) {
    return (
        <div className={`order-card-container ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelectProduct(product)}>
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img alt={product.name} src={product.imageUri} className="order-card-image" />
            <h3 className="order-card-price">
                {/* R$ {product.price} */}
                {formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <h3>
                    {product.description}
                </h3>
            </div>
        </div>
    )
}
export default ProductCard;