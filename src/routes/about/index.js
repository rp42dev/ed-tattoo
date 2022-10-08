import { usePrerenderData } from '@preact/prerender-data-provider';
import Header from '../../components/header';
import Container from '../../components/container';

import style from './style';

const About = (props) => {
    const [data, isLoading] = usePrerenderData(props);

    return (
        <>
            <Header links={['home', 'facebook', 'instagram']} />
            <main>
                <section class={style.aboutContainer}>
                    <div class={style.aboutMe}>
                        <Container width="900" >
                            <article>
                                <h1>About Me</h1>
                                <p>
                                    I'm a Tattoo Artist based in the Oslo.
                                    I've been tattooing for 5 years and have been a professional artist for 10 years.
                                    I love to create new pieces and I'm always looking for new challenges.
                                </p>
                                <p>
                                    My style is black and grey realism, as I love the contrast and the
                                    depth that black and grey can give. I also love to create pieces
                                    that are very detailed and have a lot of depth to them.
                                </p>
                            </article>
                        </Container>
                    </div>

                    <Container width="900" >
                        <article>
                            <h2>Studio </h2>
                            <p>
                                The studio is located in the heart of Oslo, and is easily accessible by public transport.
                                My goal is to create a space where people can feel comfortable and safe, and where they can get the best possible experience.
                                environment is important to me, and I want to make sure that my clients feel safe and comfortable.
                                It has all the equipment needed to create a safe and sterile environment for both the artist and the client.
                            </p>
                        </article>
                    </Container>

                </section>

            </main>
        </>
    );
};

export default About;
