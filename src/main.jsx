import ReactDOM from 'react-dom';
import { Application } from './Components/Application/Aplication';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './Contexts/UserContext';
import { CarritoContextProvider } from './Contexts/CarritoContext';


ReactDOM.render(
    <UserContextProvider>
        <CarritoContextProvider>
            <BrowserRouter>
                <Application />
            </BrowserRouter>
        </CarritoContextProvider>
    </UserContextProvider>,
    document.getElementById('root')
);
