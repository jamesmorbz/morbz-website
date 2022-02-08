import React from 'react';
import './App.css'
import { Footer } from './containers';
import { Navbar } from './components';
import { About, Home } from './views';
import { Routes, Route } from 'react-router-dom';
import Matrix from '../src/containers/matrix/index';

export default function App() {
    return (
        <div>
            <div className="App">
                <div className="gradient_bg">
                    <Navbar />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Matrix/>}/>
                </Routes>
                <Footer />
            </div>
        </div>
    );
}
