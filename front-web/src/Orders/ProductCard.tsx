// import { ReactComponent as Pizza } from './pizzacalabresaacebolada 1.svg';
import { Product } from './types';

//Adicionando os produtos de forma DINÂMICA

type Props = {
    product: Product
}

function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    return formatter.format(price)
}


function ProductCard({ product }: Props) {
    return (
        <div className="order-card-container">
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
                <p>
                    Descrição Uma deliciosa combinação de linguiça calabresa, rodelas de azeitonas pretas, mussarela, poupa de tomate, orégano e massa especial.
                </p>
            </div>
        </div>
    )
}
export default ProductCard;