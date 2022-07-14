import './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

function Main() {
    return (
        <div className='content'>
            <section className='lead'>
                <Promo />
                <NavTab />
            </section>
            <section className='about'>
                <AboutProject />
            </section>
            <section className='techs'>
                <Techs />
            </section>
        </div>
    )
}

export default Main;