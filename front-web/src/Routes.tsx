import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";

//Ele faz o gerenciamento das rotas
function Routes() { //Componente
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/orders"> {/*Quando for digitado na url irá para os pedidos*/}
                    <Orders /> {/*chamando os pedidos*/}
                </Route>
                <Route path="/">
                    <Home /> {/*chamando a pagina home*/}
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;
//ESTUDAR MAIS SOBRE REACT ROUTE
//A ROTA É USADA ATRAVÉS DA URL DO NAVEGADOR
/*O React trabalha por componentes das páginas web, ou seja,
cada componente terá sua funcionalidade. (como uma função em Javascript)*/