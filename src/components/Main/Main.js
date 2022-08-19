import './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main() {
    return (
        <div className='content'>
            <section className='lead'>
                <Promo />
                <NavTab />
            </section>
            <section className='about' id='about-link'>
                <AboutProject />
            </section>
            <section className='techs' id='techs-link'>
                <Techs />
            </section>
            <section className='about-me' id='about-me-link'>
                <AboutMe />
            </section>
            <section className='portfolio'>
                <Portfolio />
            </section>
        </div>
    )
}

export default Main;