import React from 'react';
import './App.css'
import { Footer, SignUp } from './containers';
import { Navbar } from './components';
import { About, Home } from './views';
import { Routes, Route } from 'react-router-dom';
import Matrix from './containers/matrix/index';

export default function App() {
    return (
        <div>
            <div className="App">
                <Routes>
                    <Route path="/" element={<><div className="gradient_bg"><Navbar /></div><Home /><Footer /></>} />
                    <Route path="/about" element={<><div className="gradient_bg"><Navbar /></div><About /><Footer /></>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="*" element={<Matrix />} />
                </Routes>
            </div>
        </div>
    );
}
