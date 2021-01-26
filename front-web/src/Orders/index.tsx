import { useEffect, useState } from 'react';
import { fetchProducts, saveOrder } from '../api';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './types';
import { ToastContainer, toast } from 'react-toastify'

function Orders() { //Será o responsável de tirar as informações do Backend para o Frontend

    const [products, setProducts] = useState<Product[]>([]);//Criando um estado
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>()
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price
    }, 0)

    console.log(products)

    useEffect(() => {
        //console.log("componente orders iniciou")
        fetchProducts()
            .then(response => setProducts(response.data)) //Quando a requisição deu sucesso '.data' é do axios
            .catch(error => console.log(error))
    }, [])

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product)

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id)
            setSelectedProducts(selected)
        } else {
            setSelectedProducts(previous => [...previous, product])
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }))
        const payload = {
            ...orderLocation!,
            products: productsIds
        }
        saveOrder(payload).then((response) => {
            toast.error(`Pedido enviado com sucesso de Nº ${response.data.id}!`) //ver a biblioteca 'toastify'
            setSelectedProducts([])
        })
            .catch(() => {
                toast.warning('Erro ao enviar o pedido')
            })
    }

    return (
        <>
            <div className="orders-container">
                {/* <h1>Orders</h1> */}
                <StepsHeader />
                <ProductsList products={products} onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts} /> {/*VER PRODUCTSLIST*/}
                <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                <OrderSummary amount={selectedProducts.length} totalPrice={totalPrice}
                    onSubmit={handleSubmit}
                />
            </div>
            <Footer />
        </>
    )
}
export default Orders