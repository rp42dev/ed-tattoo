import style from './style';

const ScrollDown = (show) => {
    return (
        <>
            {show && <div className={style.scroll}>
                <span>Scroll <i class="fas fa-chevron-down"></i></span>
            </div>} 
        </>
    );
};

export default ScrollDown;