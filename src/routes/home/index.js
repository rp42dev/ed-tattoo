import { useEffect } from 'preact/hooks';
import { usePrerenderData } from '@preact/prerender-data-provider';

import style from "./style";
import Header from '../../components/header';
import Hero from '../../components/hero';
import Container from "../../components/container";
import ScaledText from '../../components/scaledText';
import FeatureHome from '../../components/featureHome';
import HeadingColor from '../../components/headingColor';
import Button from "../../components/button";
import AboutSection from './partials/about';
import Work from './partials/work';
import ContactHome from './partials/contact';
import Footer from '../../components/footer';


const Home = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	if (isLoading) return null;
	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */
	if (!data) return null;
	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href = `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	}, []);

	return (
		<>
			<Header links={['gallery', 'facebook', 'instagram']} />
			<main class={style.home}>
				<Hero hero={data.cover} displayScroll={true}>
						<Container width={900}>
							<div class={style.content}>
								<div>
									<ScaledText maxFontSize={197} maxContainerWidth={900} minFontSize={54} tag='h1'>
										<HeadingColor>Ed Tattoo</HeadingColor>
									</ScaledText>
								</div>
								<div>
									<FeatureHome />
								</div>
								<div className={style.paddingTop}>
									<ScaledText maxFontSize={47} maxContainerWidth={900} minFontSize={11.5}>
										<h3 className={style.spanColor}> <span>Great </span> Art Starts with<span>Great</span> Rate</h3>
									</ScaledText>
									<ScaledText maxFontSize={45.4} maxContainerWidth={900} minFontSize={15}>
										<a href="https://goo.gl/maps/tpki7Zt725WVUs8b8" target="_blank">
											<span className={style.address}>
												Hans Egedes vei 12, Lørenskog, 1470, Norway
											</span>
										</a>
									</ScaledText>
								</div>
								<ScaledText maxFontSize={124} maxContainerWidth={900} minFontSize={30} tag='h2'>
									<a href='tel:+47 465 88 983'>
										<HeadingColor>+47 465 88 983</HeadingColor>
									</a>
								</ScaledText>
								<div class={style.button}>
									<Button link="contact" text="Message" type="link" />
								</div>
							</div>
						</Container>
					</Hero>
			
				<AboutSection data={data.home.edges[0].details.homeSections[0]} />
				<Work data={data.galleryData} display={true}/>
				<ContactHome data={data.contactCover} />
				<Footer />
			</main>
		</>
	);
};

export default Home;
