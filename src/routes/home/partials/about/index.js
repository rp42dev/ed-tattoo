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
    const imageTitles = ['An Image of Ed tattooing bird on client arm', 'An image of tattoo studio Ed Tattoo'];

    return (
        <div class={style.about}>
            <section class={style.aboutSection}>
                <FadeEffect>
                    <Container width="900">
                        <ScaledText maxFontSize={55} maxContainerWidth={400} minFontSize={38} tag='h2'>
                            <HeadingColor>{data.title}</HeadingColor>
                        </ScaledText>
                        <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16}>
                            <Markdown>
                                {data.body}
                            </Markdown>
                        </ScaledText>
                        <Button link="more" text="Read more" type="link" />
                    </Container>
                </FadeEffect>
            </section>
            <ImageFeature images={data.aboutImages} titles={imageTitles} />
        </div>
    );
};

export default AboutSection;