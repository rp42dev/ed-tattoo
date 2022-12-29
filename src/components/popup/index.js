import { useEffect, useState } from 'preact/hooks';

import style from './style.css';
import ButtonWrapper from '../buttonWrapper';

const Popup = (props) => {
    const [show, setShow] = useState(false);
   
    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 1000);
    }, []);

    const closePopup = () => {
        document.body.style.overflow = 'unset';
        const popup = document.getElementById('popup');
        popup.classList.remove(style.show);
        setTimeout(() => {
            setShow(false);
        }, 500);
    }

    return (
        <div id="popup" className={[style.popup, show ? style.show : ''].join(' ')}>
            <div className={style.popupInner}>
                <div className={style.popupHeader}>
                    <div className={style.popupClose} onClick={closePopup}><i class="fa-solid fa-xmark"></i></div>
                </div>
                <div className={style.popupContent}>
                    <div className={style.popupImage}>
                        <picture>
                            <source srcset={`${props.special.cover}.webp`} type="image/webp" />
                            <img src={props.special.cover} alt="hero image" />
                        </picture>
                    </div>
                    <div className={style.popupText}>
                        <h2>{props.special.title}</h2>
                        <>{props.special.body}</>
                    </div>
                </div>
                <div className={style.popupFooter}>
                    <ButtonWrapper links={["phone", "contact"]} text="Contact" />
                </div>
            </div>
        </div>
    );
}

export default Popup;