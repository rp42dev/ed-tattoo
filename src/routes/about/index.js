import { usePrerenderData } from '@preact/prerender-data-provider';
import style from './style';
import Header from '../../components/header';
import Hero from '../../components/hero';
import Container from '../../components/container';
import ScaledText from '../../components/scaledText';
import FeatureHome from '../../components/featureHome';
import ButtonWrapper from '../../components/buttonWrapper';
import FadeEffect from '../../components/fadeEffect';
import HeadingColor from '../../components/headingColor';
import Markdown from 'markdown-to-jsx';
import Button from '../../components/button';
import ImageFeature from '../../components/imageFeature';
import Footer from '../../components/footer';


const About = ({ ...props }) => {
    const [data, isLoading] = usePrerenderData(props);

    if (isLoading) return null;
    const imageAboutTitles = ['Ed tattooing bird on client arm', 'Ed tattooing on client arm close up'];
    const imageStudioTitles = ['Tattoo studio Ed Tattoo', 'Tattoo studio ink setup Ed Tattoo'];

    return (
        <>
            <Header links={['home', 'facebook', 'instagram']} />
            <main class={style.main}>
                <Hero hero={data.cover} displayScroll={true}>
                    <Container width={900}>
                        <div className={style.aboutContent}>
                            <ScaledText maxFontSize={197} maxContainerWidth={900} minFontSize={54} tag='h1'>
                                <span>Ed </span>Tattoo
                            </ScaledText>

                            <div className={style.paddingTop}>
                                <ScaledText maxFontSize={45.4} maxContainerWidth={900} minFontSize={15}>
                                    <a href="https://goo.gl/maps/tpki7Zt725WVUs8b8" target="_blank">
                                        <span className={style.address}>
                                            Tattoo studio, Tattoos that last a lifetime!
                                        </span>
                                    </a>
                                </ScaledText>
                            </div>
                            <article>
                                <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16} tag='p' >
                                    <Markdown>
                                        {data.about.content}
                                    </Markdown>
                                </ScaledText>
                                <div class={style.button}>
                                    <ButtonWrapper links={["phone", "contact"]} text="contact Me" />
                                </div>
                            </article>
                        </div>
                    </Container>
                </Hero>
                <section class={style.about}>
                    <div className={style.aboutSection}>
                        <FadeEffect>
                            <Container width="900" >
                                <ScaledText maxFontSize={55} maxContainerWidth={400} minFontSize={38} tag='h2'>
                                    <HeadingColor>{data.aboutSection.title}</HeadingColor>
                                </ScaledText>
                                <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16}>
                                    <Markdown>
                                        {data.aboutSection.body}
                                    </Markdown>
                                </ScaledText>
                                <Button link={"gallery"} text="My Work" type="link" />
                            </Container>
                        </FadeEffect>
                    </div>
                    <div class={style.width}>
                        <FadeEffect>
                            <ImageFeature images={data.aboutSection.aboutImages} titles={imageAboutTitles} />
                        </FadeEffect>
                    </div>
                </section>
                <section class={style.about}>
                    <div class={style.image}>
                        <FadeEffect>
                            <ImageFeature images={data.studioSection.studioImages} titles={imageStudioTitles} />
                        </FadeEffect>
                    </div>
                    <div class={style.text}>
                        <FadeEffect>
                            <Container width="900" >
                                <ScaledText maxFontSize={55} maxContainerWidth={400} minFontSize={38} tag='h2'>
                                    <HeadingColor>{data.studioSection.title}</HeadingColor>
                                </ScaledText>
                                <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16}>
                                    <Markdown>
                                        {data.studioSection.body}
                                    </Markdown>
                                </ScaledText>
                                <Button link="map" text="Location" type="link" />
                            </Container>
                        </FadeEffect>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default About;
