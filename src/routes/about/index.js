import { usePrerenderData } from '@preact/prerender-data-provider';
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
    const cover = data.dataAbout.edges[0].details.cover

    const aboutImages = data.aboutImages.edges;
    const studioImages = data.studioImages.edges;



    return (
        <>
            <Header links={['home', 'facebook', 'instagram']} />
            <div class={style.main}>
                <Hero hero={cover} isLoaded={true}>
                    <Container width={900}>
                        <article class={style.content}>
                            <div>
                                <ScaledText maxFontSize={210} maxContainerWidth={900} minFontSize={63}>
                                    <h1><HeadingColor>About</HeadingColor></h1>
                                </ScaledText>
                            </div>
                            <div>
                                <ScaledText maxFontSize={132} maxContainerWidth={900} minFontSize={36}>
                                    <h1><HeadingColor>Ed Tattoo</HeadingColor></h1>
                                </ScaledText>
                            </div>
                            <div>
                                <FeatureHome />
                            </div>
                            <div className={style.text}>
                                <ScaledText maxFontSize={46} maxContainerWidth={900} minFontSize={13}>
                                    <h3 className={style.spanColor}> <span>Your</span> welcome for <span>best</span> tattoo.</h3>
                                </ScaledText>

                                <ScaledText maxFontSize={46} maxContainerWidth={900} minFontSize={16}>

                                <p className={style.spanColor}>
                                    Hans Egedes vei 12, Lorenskog 1470, Oslo
                                    
                                </p>
                                </ScaledText>
                            </div>
                        </article>
                    </Container>

                </Hero>

                <div class={style.about}>

                    <Container width="900" >
                        <article>
                            <ScaledText maxFontSize={36} maxContainerWidth={400} minFontSize={26} >
                                <h1><HeadingColor>{data.dataAbout.edges[0].details.title}</HeadingColor></h1>
                            </ScaledText>
                            <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16}>
                                <p>
                                    <Markdown>
                                        {data.about.content}
                                    </Markdown>
                                </p>
                            </ScaledText>
                            <IconWrapper link="contact" text="Contact me" type="link" />
                        </article>
                    </Container>
                    <ImageFeature images={aboutImages} />
                </div>

                <div class={style.about}>
                    <div class={style.image}>
                        <ImageFeature images={studioImages} />
                    </div>
                    <div class={style.text}>
                        <Container width="900" >
                            <article>
                                <ScaledText maxFontSize={36} maxContainerWidth={400} minFontSize={26} >
                                    <h2><HeadingColor>{data.dataStudio.edges[0].details.title}</HeadingColor></h2>
                                </ScaledText>
                                <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16}>
                                    <p>
                                        <Markdown>
                                            {data.studio.content}
                                        </Markdown>
                                    </p>
                                </ScaledText>
                             <IconWrapper link="map" text="Locate me" type="link" />
                            </article>
                        </Container>
                    </div>

                </div>

            </div>
            <div class={style.footerWrapper}>
                <Footer />
            </div>
        </>
    );
};

export default About;
