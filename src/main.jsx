import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
//import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename='e-commerce-app'>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
