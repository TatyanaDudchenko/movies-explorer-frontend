import './AboutProject.css';
import React from 'react';

function AboutProject() {
    return (
        <section className='about-project'>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__description'>
                <div className='about-project__description-column'>
                    <h3 className='about-project__description-column_title'>Дипломный проект включал 5 этапов</h3>
                    <p class='about-project__description-column_paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__description-column'>
                    <h3 className='about-project__description-column_title'>На выполнение диплома ушло 5 недель</h3>
                    <p class='about-project__description-column_paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about-project__presentation'>
                <div className='about-project__presentation-column about-project__presentation-column_left'>
                    <div className='about-project__presentation-column-item about-project__presentation-column-item_title-color-left'>
                        <h4 className='about-project__presentation-column-title_left'>1 неделя</h4>
                    </div>
                    <div className='about-project__presentation-column-item'>
                        <p className='about-project__presentation-column-paragraph'>Back-end</p>
                    </div>
                </div>
                <div className='about-project__presentation-column about-project__presentation-column_right'>
                    <div className='about-project__presentation-column-item about-project__presentation-column-item_title-color-right'>
                        <h4 className='about-project__presentation-column-title_right'>4 недели</h4>
                    </div>
                    <div className='about-project__presentation-column-item'>
                        <p className='about-project__presentation-column-paragraph'>Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;