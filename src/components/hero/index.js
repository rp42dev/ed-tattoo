import FadeEffect from '../fadeEffect';
import style from './style';
import ScrollDown from '../scrollDown';

const Hero = ({ children, ...props }) => {
    const { hero, displayScroll } = props;

    return (
        <FadeEffect>
            <div className={style.hero}>
                <div className={style.heroImage}>
                   
                    <picture>
                        <source srcset={`../${hero}.webp`} type="image/webp" />
                        <source srcset={`../${hero}`} type="image/jpeg" />
                        <img src={`../${hero}`} alt="hero" />
                    </picture>
                
                </div>

                <section className={style.container}>
                    {children}
                </section>
                <div className={style.overlay}>

                </div>
            </div>
        </FadeEffect>
    );
};

export default Hero;