import { usePrerenderData } from '@preact/prerender-data-provider';
import Header from '../../components/header';
import HeadingColor from '../../components/headingColor';
import Container from '../../components/container';
import ScaledText from '../../components/scaledText';
import ImageFeature from '../../components/imageFeature';
import Markdown from 'markdown-to-jsx';
import Footer from '../../components/footer';


import style from './style';


const About = ({...props}) => {
    const [data, isLoading] = usePrerenderData(props);

    return (
        <>
            <Header links={['home', 'facebook', 'instagram']} />
            <main class={style.main}>
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
                    <ImageFeature images={data.data.about} titles={data.data.titles.slice(0, 1)} />
                </div>

                <div class={style.about}>
                    <div class={style.image}>
                        <ImageFeature images={data.data.studio} titles={data.data.titles.slice(1, 3)} />
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
