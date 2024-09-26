import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import App from './App';
import Cart from './Cart';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    </Provider>
);
