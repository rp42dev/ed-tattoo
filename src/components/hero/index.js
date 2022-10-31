import style from './style';
import ScroolDown from '../scrolDown';

const Hero = ({ children, ...props }) => {
    const { hero, isLoaded } = props;

    return (
        <div className={style.hero}>
            <div className={style.heroImage}>
                {isLoaded &&
                    <picture>
                        <source srcset={`${hero}.webp`} type="image/webp" />
                        <source srcset={hero} type="image/jpeg" />
                        <img src={hero} alt="hero" />
                    </picture>}
            </div>

            <main className={style.container}>
                {children}
            </main>
            <div className={style.overlay}>
                
            </div>
            <ScroolDown />
        </div>
    );
};

export default Hero;