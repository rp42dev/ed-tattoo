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
            <div class={style.about}>
                
                    <Container width="900">
                        <article>
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
                        </article>
                        <IconWrapper link="more" text="Read more" type="link" />

                    </Container>

                <ImageFeature images={images} />
                </div>
        </section>
    );
};

export default AboutSection;