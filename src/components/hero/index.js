import FadeEffect from '../fadeEffect';
import style from './style';

const Hero = ({ children, ...props }) => {
    const { hero } = props;

    return (
        <FadeEffect>
            <div className={style.hero}>
                <div className={style.heroImage}>
                   
                    <picture>
                        <source srcset={`${hero}.webp`} type="image/webp" />
                        <img src={hero} alt="hero image" />
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