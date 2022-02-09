import React from 'react';
import './App.css'
import { About, Home, PageNotFound, SignUp } from './views';
import { Routes, Route } from 'react-router-dom';


export default function App() {
    return (
        <div>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </div>
    );
}
