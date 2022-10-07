import Container from '../../../../components/container';
import ScaledText from '../../../../components/scaledText';
import IconWrapper from '../../../../components/buttonWrapper';
import style from './style';

const AboutSection = () => {
    return (
        <section class={style.padding0}>
            <div class={style.aboutSection}>
                <div class={style.about}>
                    <Container children={
                        <>
                            <ScaledText maxFontSize={36} maxContainerWidth={900} minFontSize={16}>
                                <h1><span>About</span> Me</h1>
                            </ScaledText>
                            <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16}>
                                <>
                                    <p>
                                        I started tattooing in 2017 and have been working in Oslo since then.
                                        Tattoo is my passion and I love to create new pieces.
                                    </p>
                                    <p>
                                        My style is black and grey realism, as I love the contrast and the
                                        depth that black and grey can give. I also love to create pieces
                                        that are very detailed and have a lot of depth to them.

                                    </p>
                                </>
                            </ScaledText>
                            <IconWrapper link="/about" text="Read more" type="link">
                               <i class="fas fa-arrow-right"></i>
                            </IconWrapper>
                        </>
                    } width="900" />
                </div>
                <div class={style.cardSection}>
                    <div class={style.card}>
                        <div class={style.cardImage}>
                            
                            <img src="../../assets/images/pexels-matheus-ferrero-2123061-900.jpg" alt="Ed" />
                        </div>
                    </div>
                    <div class={style.card}>
                        <div class={style.cardImage}>
                            <img src="../../assets/images/pexels-parcerografo-5968440-900.jpg" alt="Ed" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;