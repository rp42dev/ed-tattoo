import style from './style';

const ScrollDown = () => {
    const top = document.documentElement.scrollTop;

    


    return (
        <>
            <div className={style.scroll}>
                <span>Scroll <i class="fas fa-chevron-down"></i></span>
            </div>
        </>
    );
};

export default ScrollDown;