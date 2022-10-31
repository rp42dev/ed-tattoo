import style from './style';

const Hero = ({ children, ...props }) => {	
    const { hero, isLoaded } = props;

    return (
        <div class={style.hero}>
            <div class={style.homeContainer}>
                <div class={style.heroImage}>
                    {isLoaded &&
                        <picture>
                            <source srcset={`${hero}.webp`} type="image/webp" />
                            <source srcset={hero} type="image/jpeg" />
                            <img src={hero} alt="hero" />
                        </picture>}
                </div>

                <main class={style.containerHero}>
                    {children}
                </main>
                <div class={style.overlay}>
                </div>
            </div>

        </div>
    );
};

export default Hero;