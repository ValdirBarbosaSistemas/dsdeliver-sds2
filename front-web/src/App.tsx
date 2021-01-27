import './App.css';
import Routes from './Routes';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    // <>
    //   <Navbar />
    //   <Home />
    // </>
    <>
      <Routes /> {/*chamando as ROTAS*/}
      <ToastContainer /> 
    </>
  );
}
/*ESTUDAR MAIS SOBRE FRAGMENT*/
//VER MAIS SOBRE O APLICATIVO FIGMA
export default App;
