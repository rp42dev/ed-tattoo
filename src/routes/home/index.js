import { useEffect, useState } from 'preact/hooks';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Header from '../../components/header';


import Work from './partials/work';
import ContactHome from './partials/contact';
import IconWrapper from "../../components/buttonWrapper";
import ScaledText from '../../components/scaledText';
import Container from "../../components/container";
import AboutSection from './partials/about';
import FeatureHome from '../../components/featureHome';
import Footer from '../../components/footer';
import HeadingColor from '../../components/headingColor';
import Hero from '../../components/hero';
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
			<Header links={['gallery', 'facebook', 'instagram']} />

			<div class={style.home}>
				{isLoaded && (
					<Hero hero={data.image} isLoaded={isLoaded} displayScroll={true}>
						<Container width={900}>
							<article class={style.content}>
								<div>
									<ScaledText maxFontSize={132} maxContainerWidth={900} minFontSize={52}>
										<h1><HeadingColor>{data.home.edges[0].details.title}</HeadingColor></h1>
									</ScaledText>
								</div>

								<div>
									<ScaledText maxFontSize={46} maxContainerWidth={900} minFontSize={12}>
										<h3 className={style.spanColor}> <span>Great </span> Art Starts with<span>Great</span> Rate</h3>
									</ScaledText>
									<ScaledText maxFontSize={48} maxContainerWidth={900} minFontSize={16.5}>
										<span className={style.address}>
											Hans Egedes vei 12, Lorenskog 1470, Oslo
										</span>
									</ScaledText>
								</div>

								<div>
									<FeatureHome />
								</div>

								<ScaledText maxFontSize={92} maxContainerWidth={900} minFontSize={23}>
									<a href={`tel:${data.home.edges[0].details.phone}`}>
										<h2><HeadingColor>{data.home.edges[0].details.phone}</HeadingColor></h2>
									</a>
								</ScaledText>
								<div class={style.buttonWrapper}>
									<IconWrapper link="contact" text="Message" type="link" />
								</div>

							</article>

						</Container>

					</Hero>
				)}


				{/* About Section */}

				{isLoaded && <AboutSection data={data} />}

				{/* Latest work */}

				<Work data={data} isLoading={isLoading} display={display} />

				{/* Contact */}


				{isLoaded && <ContactHome data={data} />}


				<Footer />
			</div>
		</>
	);
};

export default Home;
