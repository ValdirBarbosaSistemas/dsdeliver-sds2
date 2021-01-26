import './App.css';
import Routes from './Routes';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    // <>
    //   <Navbar />
    //   <Home />
    // </>
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}
/*ESTUDAR MAIS SOBRE FRAGMENT*/
//VER MAIS SOBRE O APLICATIVO FIGMA
export default App;
