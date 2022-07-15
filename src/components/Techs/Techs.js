import './Techs.css';

function Techs() {
    return (
        <div className='techs-container'>
            <div className='title-container'>
                <h2 className='title-container__title'>Технологии</h2>
            </div>
            <div className='techs-content'>
                <h3 className='techs-content__title'>7 технологий</h3>
                <p className='techs-content__paragraph'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className='techs-content__list'>
                    <li className='techs-content__item'>HTML</li>
                    <li className='techs-content__item'>CSS</li>
                    <li className='techs-content__item'>JS</li>
                    <li className='techs-content__item'>React</li>
                    <li className='techs-content__item'>Git</li>
                    <li className='techs-content__item'>Express.js</li>
                    <li className='techs-content__item'>MongoDB</li>
                </ul>
            </div>

        </div>
    )
}

export default Techs;
