import './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';

function Main() {
    return (
        <div className='content'>
            <section class="lead">
                <Promo />
                <NavTab />
            </section>
        </div>
    )
}

export default Main;