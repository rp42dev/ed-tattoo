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
import HeadingColor from '../../components/headingColor';
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
									<source srcset={`${data.home.edges[0].details.cover}.webp`} type="image/webp" />
									<source srcset={data.home.edges[0].details.cover} type="image/jpeg" />
									<img src={data.home.edges[0].details.cover} alt="hero" />
								</picture>}
						</div>

						<main class={style.containerHero}>
							<Container children={
								<article class={style.content}>
									<div>
										<ScaledText maxFontSize={132} maxContainerWidth={900} minFontSize={37}>
										<h1><HeadingColor>{data.home.edges[0].details.title}</HeadingColor></h1>	
										</ScaledText>
									</div>

									<div>
										<FeatureHome />
									</div>

									<ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16} >
										<p>
											{data.home.edges[0].details.headline}
										</p>
									</ScaledText>

									<ScaledText maxFontSize={92} maxContainerWidth={900} minFontSize={24}>
										<a href={`tel:${data.home.edges[0].details.phone}`}>
											<h2><HeadingColor>{data.home.edges[0].details.phone}</HeadingColor></h2>
										</a>
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
