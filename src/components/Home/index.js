import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/L.png';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['e', 'w', 'i', 's'];
    const titleArray = [
        'A', ' ', 'C', 'o', 'm', 'p', 'u', 't', 'e',
        'r', ' ', 'S', 'c', 'i', 'e', 'n', 'c', 'e',
        ' ', 'G', 'r', 'a', 'd', 'u', 'a', 't', 'e'
      ];
    
      useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 6000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
    }, []);


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer"/> 
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={titleArray}
                idx={19} />
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