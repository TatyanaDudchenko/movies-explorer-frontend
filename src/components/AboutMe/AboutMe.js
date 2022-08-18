import photoAuthor from '../../images/photo-author.jpg';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className='about-me-container'>
            <div className='title-container'>
                <h2 className='title-container__title'>Студент</h2>
            </div>
            <div className='about-me-content'>
                <div className='about-me-content__description'>
                    <h3 className='about-me-content__description-title'>Татьяна</h3>
                    <p className='about-me-content__description-paragraph about-me-content__description-paragraph_job'>Фронтенд-разработчик, 32 года</p>
                    <p className='about-me-content__description-paragraph about-me-content__description-paragraph_about'>Я родилась и живу в Екатеринбурге, закончила факультет менеджмента УрФ РГУТиС и факкультет финансов ВШЭ УрФУ. У меня есть муж
                        и сын. Я люблю слушать музыку, а ещё увлекаюсь ландшафтным и интерьерным дизайном. Недавно начала кодить. С 2010 по 2020 годы работала в индустрии гостеприимства. После того, как поняла, что исчерпала себя в сфере по основной специальности, поставила цель сменить профессиональную деятельность и увлеклась веб-разработкой. На пути к цели ушла с постоянной работы и прошла курс по веб-разработке в Яндекс.Практикум.</p>
                    <ul className='about-me-content__list'>
                        <li className='about-me-content__list-item'>Facebook</li>
                        <li className='about-me-content__list-item'>Github</li>
                    </ul>
                </div>
                <div className='about-me-content__image'>
                    <img className='about-me-content__photo-author' src={photoAuthor} alt='Фотография автора проекта' />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;