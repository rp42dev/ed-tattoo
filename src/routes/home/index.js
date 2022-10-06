import { useEffect, useState } from 'preact/hooks';
import { usePrerenderData } from '@preact/prerender-data-provider';

import ButtonWrapper from "../../components/buttonWrapper";
import getBlogsListing from '../../components/getBlogs';
import ScaledText from '../../components/scaledText';
import Container from "../../components/container";
import AboutSection from './partials/about';
import style from "./style";


const Home = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	const [isLoaded, setIsLoaded] = useState(false);

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
		<main class={style.home}>
			<div class={style.videoContainer}>
				<video id="video" playsinline="playsinline" muted="muted" loop="loop" autoplay="autoplay" >
					<source src="../../assets/bg.mp4" type="video/mp4" />
					<source src="../../assets/bg.webm" type="video/webm" />
				</video>

				<div class={style.overlay}>
					<div class={style.container}>
						<Container children={
							<article>

								<ScaledText children={<h1><span>Ed </span>Tattoo</h1>} maxFontSize={90} maxContainerWidth={900} />

								<ScaledText children={<p>
									Hi I'm Ed, I'm a tattoo artist based in the Oslo.
									I specialise in black and grey realism and
									I'm always looking to expand my portfolio.
								</p>} maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16} />

								<ButtonWrapper children={<i class="fa-solid fa-paper-plane"></i>} link="/contact" text="Contact me" type="link" />
							</article>
						} width="900" />
					</div>
				</div>
			</div>

			<AboutSection />

			{/* Latest work */}

			<section class={style.latestWork}>
				<div class={style.container}>
					<ScaledText children={<h1>Latest <span>Work</span></h1>} maxFontSize={36} maxContainerWidth={900} minFontSize={16} />

					<div class={style.gallery}>
						{getBlogsListing(data, isLoading)}
					</div>
				</div>
			</section>

		</main>
	);
};

export default Home;
