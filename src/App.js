import React from 'react';
import './App.css'
import { About, Home, PageNotFound, SignUp, SignIn } from './views';
import { Routes, Route } from 'react-router-dom';


export default function App() {
    return (
        <div>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn/>} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </div>
    );
}
