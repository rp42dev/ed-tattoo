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
                        <ScaledText maxFontSize={36} maxContainerWidth={400} minFontSize={30} >
                                <h2><span>About</span> Me</h2>
                            </ScaledText>
                            <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16}>

                                <p> 
                                    My style is black and grey realism, I love the contrast and 
                                    the depth that black and grey can give. I also love to do
                                    colour work, I love the vibrancy and the way it can bring
                                    a tattoo to life. I'm always happy to do custom work.

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