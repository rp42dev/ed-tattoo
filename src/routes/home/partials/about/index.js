import Container from '../../../../components/container';
import ScaledText from '../../../../utils/scaledText';
import ButtonWrapper from '../../../../components/buttonWrapper';
import style from './style';

const AboutSection = () => {
    return (
        <section class={style.padding0}>
            <div class={style.aboutSection}>
                <div class={style.about}>
                    <Container children={
                        <>
                            <ScaledText children={<h1>About <span>Me</span></h1>} maxFontSize={36} maxContainerWidth={900} minFontSize={16} />
                            <ScaledText children={
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
                            } maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16} />
                            <ButtonWrapper children={<i class="fa-solid fa-camera"></i>} link="/blogs" text="Gallery" type="link" />
                        </>
                    } width="900" />
                </div>
                <div class={style.cardSection}>
                    <div class={style.card}>
                        <div class={style.cardImage}>
                            <img src="../../assets/images/pexels-clem-onojeghuo-194074-900.jpg" alt="Ed" />
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