import './AboutProject.css';
import React from 'react';

function AboutProject() {
    return (
        <article className='about-project'>
            <h2 class="about-project__title">О проекте</h2>
            <div class="about-project__description">
                <div className='about-project__description-column'>
                    <h3 className='about-project__column_title'>Дипломный проект включал 5 этапов</h3>
                    <p class="about-project__column_paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__description-column'>
                    <h3 className='about-project__column_title'>На выполнение диплома ушло 5 недель</h3>
                    <p class="about-project__column_paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about-project__presentation'>
                <div className='about-project__presentation-column about-project__presentation-column_left'>
                    <div className='about-project__presentation_vertical-align about-project__presentation_title-left'>
                        <h4 className='about-project__presentation-column-title_left'>1 неделя</h4>
                    </div>
                    <div className='about-project__presentation_vertical-align'>
                        <p className='about-project__presentation-column_paragraph'>Back-end</p>
                    </div>
                </div>
                <div className='about-project__presentation-column about-project__presentation-column_right'>
                    <div className='about-project__presentation_vertical-align about-project__presentation_title-right'>
                        <h4 className='about-project__presentation-column-title_right'>4 недели</h4>
                    </div>
                    <div className='about-project__presentation_vertical-align'>
                        <p className='about-project__presentation-column_paragraph'>Front-end</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default AboutProject;