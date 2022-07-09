import './Footer.css';
import React from 'react';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__copyright">
                <p className='footer__copyright_info'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            </div>
            <div className='footer__content'>
                <p className='footer__date'>&copy; 2022</p>
                <nav className='footer__social'>
                    <button className='footer__social_link'>Яндекс.Практикум</button>
                    <button className='footer__social_link'>Github</button>
                    <button className='footer__social_link'>Facebook</button>
                </nav>
            </div>
        </div>
    )
}

export default Footer;