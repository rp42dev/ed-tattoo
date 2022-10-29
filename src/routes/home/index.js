import { useEffect, useState } from 'preact/hooks';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Header from '../../components/header';

import Work from './partials/work';
import ContactForm from '../../components/forms/contact';
import IconWrapper from "../../components/buttonWrapper";
import ScaledText from '../../components/scaledText';
import Container from "../../components/container";
import AboutSection from './partials/about';
import FeatureHome from '../../components/featureHome';
import Footer from '../../components/footer';
import style from "./style";


const Home = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	const [isLoaded, setIsLoaded] = useState(false);
	const display = true;

	useEffect(() => {
		if (!isLoading) {
			setIsLoaded(true);
		}
	}, [isLoading]);
	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */
	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href = `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}

	}, []);

	return (
		<>
			<Header links={['blogs', 'facebook', 'instagram']} />

			<div class={style.home}>
				<div class={style.hero}>
					<div class={style.homeContainer}>
						<div class={style.heroImage}>
							{isLoaded && 
							<picture>
								<source srcset={data.webp} type="image/webp" />
								<source srcset={data.png} type="image/jpeg" />
								<img src={data.png} alt="hero" />
							</picture> }
							{/* <img src={} alt="hero image tattoo" /> */}
						</div>

							<main class={style.containerHero}>
								<Container children={
									<article class={style.content}>
										<div>
											<ScaledText maxFontSize={132} maxContainerWidth={900} minFontSize={6}>
												<h1><span>Ed </span>Tattoo</h1>
											</ScaledText>
										</div>

										<div>
											<FeatureHome />
										</div>
										
										<ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16} >
											<p>
												Tattoo studio in Oslo with a focus on custom tattoos and high quality work.
											</p>
										</ScaledText>

										<ScaledText maxFontSize={83} maxContainerWidth={900} minFontSize={0}>
											<h2><span> +74 </span>465 88 982</h2>
										</ScaledText>
										<div class={style.buttonWrapper}>
											<IconWrapper link="contact" text="Message" type="link" />
										</div>

									</article>
								} width="900" />
							</main>
						<div class={style.overlay}>
						</div>
					</div>
		
				</div>
				{/* About Section */}

				{isLoaded && <AboutSection data={data} />}

				{/* Latest work */}

				<Work data={data} isLoading={isLoading} display={display} />

				{/* Contact */}

				<div class={style.container}>
					<ContactForm />
				</div>

				<Footer />
			</div>
		</>
	);
};

export default Home;
