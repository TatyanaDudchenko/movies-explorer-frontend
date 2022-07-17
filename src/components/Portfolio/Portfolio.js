import './Portfolio.css';

function Portfolio() {
    return (
        <div className='portfolio-container'>
            <h4 className='portfolio-container__title'>Портфолио</h4>
            <div className='portfolio-content'>
                <ul className='portfolio-content__list'>
                    <li className='portfolio-content__item'>
                        <p className='portfolio-content__paragraph portfolio-content__paragraph_item-name'>Статичный сайт</p>
                        <p className='portfolio-content__paragraph portfolio-content__paragraph_item-simbol'>↗</p>
                    </li>
                    <li className='portfolio-content__item'>
                        <p className='portfolio-content__paragraph portfolio-content__paragraph_item-name'>Адаптивный сайт</p>
                        <p className='portfolio-content__paragraph portfolio-content__paragraph_item-simbol'>↗</p>
                    </li>
                    <li className='portfolio-content__item'>
                        <p className='portfolio-content__paragraph portfolio-content__paragraph_item-name'>Одностраничное приложение</p>
                        <p className='portfolio-content__paragraph portfolio-content__paragraph_item-simbol'>↗</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Portfolio;