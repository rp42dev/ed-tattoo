import Container from '../../../../components/container';
import ScaledText from '../../../../components/scaledText';
import IconWrapper from '../../../../components/buttonWrapper';
import ImageFeature from '../../../../components/imageFeature';
import style from './style';

const AboutSection = ({ ...props }) => {

    const { data } = props;

    return (
        <section class={style.padding0}>
            <div class={style.about}>
                
                    <Container width="900">
                        <article>
                            <ScaledText maxFontSize={36} maxContainerWidth={900} minFontSize={16}>
                                <h1><span>About</span> Me</h1>
                            </ScaledText>
                            <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16}>

                                <p>
                                    I started tattooing in 2017 and have been working in Oslo since then.
                                    Tattoo is my passion and I love to create new pieces.
                                </p>
                                <p>
                                    My style is black and grey realism, as I love the contrast and the
                                    depth that black and grey can give. I also love to create pieces
                                    that are very detailed and have a lot of depth to them.

                                </p>

                            </ScaledText>
                        </article>
                        <IconWrapper link="more" text="Read more" type="link" />

                    </Container>

                <ImageFeature images={data.images.images} titles={data.images.titles} />
                </div>
        </section>
    );
};

export default AboutSection;