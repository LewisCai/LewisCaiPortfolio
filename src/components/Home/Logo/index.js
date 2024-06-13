import './index.scss';
import LogoL from '../../../assets/images/L.png';
import { useRef } from 'react';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoL} alt='L'/>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="191.000000pt" height="300.000000pt" viewBox="0 0 191.000000 300.000000"
                preserveAspectRatio="xMidYMid meet">
                <metadata>
                Created by potrace 1.10, written by Peter Selinger 2001-2011
                </metadata>
                <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none" className='svg-container'>
                    <path d="M120 1528 l0 -1348 770 0 770 0 0 195 0 195 -575 0 -575 0 0 1153 0
                    1152 -195 0 -195 0 0 -1347z m344 1286 c3 -9 6 -514 6 -1123 l0 -1108 25 -27
                    24 -26 535 0 c294 0 541 -3 550 -6 14 -5 16 -28 16 -155 0 -149 0 -149 -24
                    -155 -36 -9 -1409 0 -1423 9 -10 6 -13 278 -13 1301 0 711 3 1296 7 1299 3 4
                    70 7 149 7 120 0 143 -2 148 -16z"/>
                    <path d="M544 2713 c3 -4 25 -9 49 -12 l42 -6 2 -1033 c2 -652 6 -1040 13
                    -1050 6 -11 9 347 10 1046 l0 1062 -62 0 c-34 0 -58 -3 -54 -7z"/>
                    <path d="M1705 400 c11 -5 32 -9 47 -9 15 -1 30 -5 33 -11 6 -10 8 -320 2
                    -327 -6 -6 -1478 -4 -1488 2 -5 4 -9 21 -9 38 0 18 -5 39 -10 47 -7 11 -10 -4
                    -10 -50 l0 -65 772 3 773 2 0 190 0 190 -65 -1 c-46 0 -59 -3 -45 -9z"/>
                </g>
                </svg>
        </div>
    )
}

export default Logo