import React from 'react';
import './App.css'
import { Footer, Possibility, SignUp, Intro} from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
            </div>
            <SignUp />
            <Possibility />
            <Intro />
            <CTA />
            <Footer />
        </div>
    )

};

export default App;
