import Container from '../../../../components/container';
import ScaledText from '../../../../components/scaledText';
import Button from '../../../../components/button';
import ImageFeature from '../../../../components/imageFeature';
import HeadingColor from '../../../../components/headingColor';
import Markdown from 'markdown-to-jsx';
import FadeEffect from '../../../../components/fadeEffect';
import style from './style';

const AboutSection = ({ ...props }) => {

    const { data } = props;
    const images = data.images.edges;

    return (
        <section class={style.aboutSection}>
            <div class={style.about}>
                <div class={style.aboutContent}>
                    <FadeEffect>
                        <Container width="900">

                            <ScaledText maxFontSize={55} maxContainerWidth={400} minFontSize={38} tag='h2'>
                                <HeadingColor>{data.home.edges[0].details.aboutHeader}</HeadingColor>
                            </ScaledText>
                            <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16}>
                                <Markdown>
                                    {data.content.content}
                                </Markdown>

                            </ScaledText>
                            <Button link="more" text="Read more" type="link" />
                        </Container>
                    </FadeEffect>
                </div>
                <ImageFeature images={images} />
            </div>
        </section>
    );
};

export default AboutSection;