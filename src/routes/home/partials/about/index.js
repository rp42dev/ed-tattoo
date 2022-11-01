import Container from '../../../../components/container';
import ScaledText from '../../../../components/scaledText';
import IconWrapper from '../../../../components/buttonWrapper';
import ImageFeature from '../../../../components/imageFeature';
import HeadingColor from '../../../../components/headingColor';
import Markdown from 'markdown-to-jsx';
import style from './style';

const AboutSection = ({ ...props }) => {

    const { data } = props;
    const images = data.images.edges;

    return (
        <section class={style.padding0}>
            <div className={style.aboutSection}>

                <div className={style.textFeature}>
                    <Container width="700">
                        <ScaledText maxFontSize={49} maxContainerWidth={900} minFontSize={12}>
                            <h3 className={style.spanColor}> <span>Your</span> welcome for <span>best</span> tattoo.</h3>
                        </ScaledText>
                        <ScaledText maxFontSize={49} maxContainerWidth={900} minFontSize={15}>

                            <p className={style.spanColor}>
                                Hans Egedes vei 12, Lorenskog 1470, Oslo
                            </p>
                        </ScaledText>
                    </Container>
                </div>

                <div class={style.about}>
                    <div className={style.aboutSection}>
                        <Container width="900">

                            <article className={style.aboutSection}>
                                <ScaledText maxFontSize={36} maxContainerWidth={400} minFontSize={30} >
                                    <h2><HeadingColor>{data.home.edges[0].details.aboutHeader}</HeadingColor></h2>
                                </ScaledText>
                                <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16}>

                                    <p>
                                        <Markdown>
                                            {data.content.content}
                                        </Markdown>

                                    </p>

                                </ScaledText>
                                <IconWrapper link="more" text="Read more" type="link" />
                            </article>
                        </Container>
                    </div>

                    <ImageFeature images={images} />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;