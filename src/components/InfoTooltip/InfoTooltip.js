import './InfoTooltip.css';

function InfoTooltip({ onClose, isOpen, message }) {
    return (
        <div className={`tooltip-popup ${isOpen && 'tooltip-popup_opened'}`}>
            <div className='tooltip-popup__container'>
                <button onClick={onClose} type='button' className='tooltip-popup__icon-close'></button>
                <div className='tooltip-popup__container_align-center'>
                    {/* <img className='tooltip-popup__icon-info-tool-tip' src={message ? iconSuccess : iconFail} alt=''/> */}
                    <h3 className='tooltip-popup__title'>{message}</h3>
                    {/* <h3 className='tooltip-popup__title'>{`${message ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}`}</h3> */}
                </div>
            </div>
        </div>
    )
}

export default InfoTooltip;