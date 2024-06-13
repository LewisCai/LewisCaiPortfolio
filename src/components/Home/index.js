import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/L.png';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['e', 'w', 'i', 's'];
    const titleArray = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={LogoTitle} alt="developer"/> 
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br/>
                A Computer Science Graduate
                </h1> 
                <h2>
                    Welcome To My Portfolio
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;