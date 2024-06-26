import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import { EmailJSResponseStatus } from '@emailjs/browser';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const reForm = useRef

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        EmailJSResponseStatus.sendForm('service_1q2z5q9', 'template_1q2z5q9', reForm.current, 'user_1q2z5q9')
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>   
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} 
                    idx={15} />
                </h1>
                <p>
                    I am interetsed in any internship/graduate opportunities. If you have any questions or would like to get in touch, please feel free to send me a message. I will get back to you as soon as possible.
                </p>
                <div className='contact-form'>
                    <form ref={reForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact