import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';

function Orders() {
    return (
        <div className="orders-container">
            {/* <h1>Orders</h1> */}
            <StepsHeader />
            <ProductsList />
        </div>
    )
}
export default Orders