import React from 'react';
import './App.css'
import { Footer } from './containers';
import { Navbar } from './components';
import { About, Home } from './views';

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
            </div>
            <Home />
            {/* <About/> */}
            <Footer />
        </div>
    )

};

export default App;
