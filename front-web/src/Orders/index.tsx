import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Product } from './types';

function Orders() { //Será o responsável de tirar as informações do Backend para o Frontend

    const [products, setProducts] = useState<Product[]>([]);//Criando um estado

    console.log(products)

    useEffect(() => {
        //console.log("componente orders iniciou")
        fetchProducts()
            .then(response => setProducts(response.data)) //Quando a requisição deu sucesso '.data' é do axios
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="orders-container">
            {/* <h1>Orders</h1> */}
            <StepsHeader />
            <ProductsList products={products} /> {/*VER PRODUCTSLIST*/}
        </div>
    )
}
export default Orders