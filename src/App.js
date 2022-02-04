import React from 'react';

import { Footer, Possibility, Features, Header, About } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <About />
            <Features />
            <Possibility />
            <CTA />
            <Footer />
        </div>
    )

};

export default App;
