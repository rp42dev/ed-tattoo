import { useEffect } from 'preact/hooks';
import style from './style';
import FadeEffect from '../../../../components/fadeEffect';
import Container from '../../../../components/container';
import ScaledText from '../../../../components/scaledText';
import Markdown from 'markdown-to-jsx';
import Button from '../../../../components/button';
import HeadingColor from '../../../../components/headingColor';
import ImageFeature from '../../../../components/imageFeature';

const AboutSection = ({ ...props }) => {

    const { data } = props;

    const images = data.aboutImages;
    const aboutContent = data.body;
    const aboutTitle = data.title;


    return (
        <div class={style.about}>
            <section class={style.aboutSection}>
                <FadeEffect>
                    <Container width="900">
                        <ScaledText maxFontSize={55} maxContainerWidth={400} minFontSize={38} tag='h2'>
                            <HeadingColor>{aboutTitle}</HeadingColor>
                        </ScaledText>
                        <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16}>
                            <Markdown>
                                {aboutContent}
                            </Markdown>
                        </ScaledText>
                        <Button link="more" text="Read more" type="link" />
                    </Container>
                </FadeEffect>
            </section>
            <ImageFeature images={images} />
        </div>
    );
};

export default AboutSection;