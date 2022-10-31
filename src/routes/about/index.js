import { usePrerenderData } from '@preact/prerender-data-provider';
import Header from '../../components/header';
import HeadingColor from '../../components/headingColor';
import Container from '../../components/container';
import ScaledText from '../../components/scaledText';
import ImageFeature from '../../components/imageFeature';
import Markdown from 'markdown-to-jsx';
import Footer from '../../components/footer';
import Hero from '../../components/hero';


import style from './style';


const About = (props) => {
    const [data, isLoading] = usePrerenderData(props);

    const aboutImages = data.aboutImages.edges;
    const studioImages = data.studioImages.edges;



    return (
        <>
            <Header links={['home', 'facebook', 'instagram']} />
            <main class={style.main}>
                {/* <Hero hero={data.about.edges[0].details.cover} isLoaded={true}>
                    <div>Hello</div>
                </Hero> */}
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
                            </article>
                        </Container>
                    </div>

                </div>

            </main>
            <div class={style.footerWrapper}>
                <Footer />
            </div>
        </>
    );
};

export default About;
