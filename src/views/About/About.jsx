import { Intro } from '../../containers';
import { CTA } from '../../components';
import { Navbar, Footer } from '../../components';

const About = () => (
    <div>
        <div>
            <Navbar />
        </div>
        <Intro />
        <CTA />
        <div>
            <Footer />
        </div>
    </div>
);

export default About;