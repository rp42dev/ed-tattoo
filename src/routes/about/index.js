import { usePrerenderData } from '@preact/prerender-data-provider';
import { useState, useEffect } from 'preact/hooks';
import Header from '../../components/header';
import HeadingColor from '../../components/headingColor';
import Container from '../../components/container';
import ScaledText from '../../components/scaledText';
import ImageFeature from '../../components/imageFeature';
import FeatureHome from '../../components/featureHome';
import IconWrapper from '../../components/buttonWrapper';
import Markdown from 'markdown-to-jsx';
import Footer from '../../components/footer';
import Hero from '../../components/hero';


import style from './style';


const About = (props) => {
    const [data, isLoading] = usePrerenderData(props);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            setIsLoaded(true);
        }
    }, [isLoading]);

    const cover = data.dataAbout.edges[0].details.cover

    const aboutImages = data.aboutImages.edges;
    const studioImages = data.studioImages.edges;

    return (
        <>
            <Header links={['home', 'facebook', 'instagram']} />
            <main class={style.main}>
                <Hero hero={cover} isLoaded={isLoaded} displayScroll={true}>
                    <Container width={900}>
                        <div className={style.aboutContent}>

                            <ScaledText maxFontSize={197} maxContainerWidth={900} minFontSize={54} tag='h1'>
                                <span>Ed </span>Tattoo
                            </ScaledText>


                            <div>
                                <FeatureHome />
                            </div>
                            <div>
                                <ScaledText maxFontSize={48} maxContainerWidth={900} minFontSize={16.5} tag='p'>
                                    <span className={style.address}>
                                        Hans Egedes vei 12, Lorenskog 1470, Oslo
                                    </span>
                                </ScaledText>
                            </div>
                            <article>
                                <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16} tag='p' >

                                    Tattoo studio in Oslo with a focus on quality and customer satisfaction.
                                    We have a wide range of styles and are always open to new ideas and challenges.
                                    The studio is located in Oslo lørenskog, and is easily accessible by public transport.
                                    It is recommend that you book an appointment in advance. We look forward to seeing you!

                                </ScaledText>
                            </article>
                            <div class={style.buttonWrapper}>
                                <IconWrapper link="phone" text="Call Me" type="link" />
                            </div>
                        </div>
                    </Container>
                </Hero>
                <section class={style.about}>
                    <div className={style.aboutSection}>

                        <Container width="900" >
                            <ScaledText maxFontSize={55} maxContainerWidth={400} minFontSize={38} tag='h2'>
                                <HeadingColor>{data.dataAbout.edges[0].details.title}</HeadingColor>
                            </ScaledText>
                            <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16}>

                                <Markdown>
                                    {data.about.content}
                                </Markdown>

                            </ScaledText>
                            <IconWrapper link="contact" text="Contact me" type="link" />
                        </Container>
                    </div>
                    <ImageFeature images={aboutImages} />
                </section>

                <section class={style.about}>
                    <div class={style.image}>
                        <ImageFeature images={studioImages} />
                    </div>
                    <div class={style.text}>
                        <Container width="900" >
                            <ScaledText maxFontSize={55} maxContainerWidth={400} minFontSize={38} tag='h2'>
                                <HeadingColor>{data.dataStudio.edges[0].details.title}</HeadingColor>
                            </ScaledText>
                            <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16}>

                                <Markdown>
                                    {data.studio.content}
                                </Markdown>

                            </ScaledText>
                            <IconWrapper link="map" text="Locate me" type="link" />
                        </Container>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default About;
