import './NavTab.css';

function NavTab() {
    return (
        <nav className='nav-tab'>
            <a href="#about-link" className='nav-tab__link'>О проекте</a>
            <a href="#techs-link" className='nav-tab__link'>Технологии</a>
            <a href="#about-me-link" className='nav-tab__link'>Студент</a>
        </nav>
    )
}

export default NavTab;