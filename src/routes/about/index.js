import { usePrerenderData } from '@preact/prerender-data-provider';
import { useState, useEffect } from 'preact/hooks';
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

    const cover = data.cover
    const aboutImages = data.aboutSection.aboutImages;
    const aboutContent = data.aboutSection.body;
    const aboutTitle = data.aboutSection.title;
    const studioImages = data.studioSection.studioImages;
    const studioContent = data.studioSection.body;
    const studioTitle = data.studioSection.title;

    return (
        <>
            <Header links={['home', 'facebook', 'instagram']} />
            <main class={style.main}>
                {!isLoading && (
                    <Hero hero={cover} displayScroll={true}>

                        <Container width={900}>
                            <div className={style.aboutContent}>

                                <ScaledText maxFontSize={197} maxContainerWidth={900} minFontSize={54} tag='h1'>
                                    <span>Ed </span>Tattoo
                                </ScaledText>


                                <div>
                                    <FeatureHome />
                                </div>
                                <div className={style.paddingTop}>
                                    <ScaledText maxFontSize={45.4} maxContainerWidth={900} minFontSize={15}>
                                        <a href="https://goo.gl/maps/tpki7Zt725WVUs8b8" target="_blank">
                                            <span className={style.address}>
                                                Hans Egedes vei 12, Lørenskog, 1470, Norway
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
                )}
                <section class={style.about}>
                    <div className={style.aboutSection}>
                        <FadeEffect>

                            <Container width="900" >
                                <ScaledText maxFontSize={55} maxContainerWidth={400} minFontSize={38} tag='h2'>
                                    <HeadingColor>{aboutTitle}</HeadingColor>
                                </ScaledText>
                                <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16}>

                                    <Markdown>
                                        {aboutContent}
                                    </Markdown>

                                </ScaledText>
                                <Button link={"gallery"} text="My Work" type="link" />

                            </Container>
                        </FadeEffect>
                    </div>
                    <ImageFeature images={aboutImages} />
                </section>

                <section class={style.about}>
                    <div class={style.image}>
                        <ImageFeature images={studioImages} />
                    </div>
                    <div class={style.text}>
                        <FadeEffect>
                            <Container width="900" >
                                <ScaledText maxFontSize={55} maxContainerWidth={400} minFontSize={38} tag='h2'>
                                    <HeadingColor>{studioTitle}</HeadingColor>
                                </ScaledText>
                                <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16}>

                                    <Markdown>
                                        {studioContent}
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
