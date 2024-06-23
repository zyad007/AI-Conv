import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App';
import Chat from '../Components/Chat';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route path='*' element={<>404 Not found</>} />
                <Route path='/' element={<App />}>
                    <Route path=":id" element={<Chat />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
