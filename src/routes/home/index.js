import { useEffect, useState } from 'preact/hooks';
import { usePrerenderData } from '@preact/prerender-data-provider';

import ButtonWrapper from "../../components/buttonWrapper";
import ScaledText from "../../utils/ScaledText";
import Container from "../../components/container";
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
		<div class={style.home}>
			<div class={style.videoContainer}>
				<video id="video" playsinline="playsinline" muted="muted" loop="loop" autoplay="autoplay" >
					<source src="../../assets/bg.mp4" type="video/mp4" />
					<source src="../../assets/bg.webm" type="video/webm" />
				</video>

				<div class={style.overlay}>
					<div class={style.container}>
						<Container children={
							<>

								<ScaledText children={<h1><span>Ed </span>Tattoo</h1>} maxFontSize={90} maxContainerWidth={900} />

								<ScaledText children={<p>
									Hi I'm Ed, I'm a tattoo artist based in the Oslo.
									I specialise in black and grey realism and
									I'm always looking to expand my portfolio.
								</p>} maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16} />

								<ButtonWrapper children={<i class="fa-solid fa-paper-plane"></i>} link="/contact" text="Contact me" type="link" />
							</>
						} width="900" />
					</div>
				</div>
			</div>
			<div class={style.container}>
				<main style="padding-left: 0; padding-right: 0">
					<div class={style.aboutSection}>
						<div class={style.about}>
							<Container children={
								<>
									<ScaledText children={<h1>About <span>Me</span></h1>} maxFontSize={36} maxContainerWidth={900} minFontSize={16} />
									<ScaledText children={
										<>
											<p>
												I started tattooing in 2017 and have been working in Oslo since then.
												Tattoo is my passion and I love to create new pieces.
											</p>
											<p>
												My style is black and grey realism, as I love the contrast and the
												depth that black and grey can give. I also love to create pieces
												that are very detailed and have a lot of depth to them.

											</p>
										</>
									} maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16} />
								<ButtonWrapper children={<i class="fa-solid fa-camera"></i>} link="/blogs" text="Gallery" type="link" />
								</>
							} width="900" />


						</div>
						<div class={style.cardSection}>
							<div class={style.card}>
								<div class={style.cardImage}>
									<img src="../../assets/images/pexels-clem-onojeghuo-194074-900.jpg" alt="Ed" />
								</div>
							</div>
							<div class={style.card}>
								<div class={style.cardImage}>
									<img src="../../assets/images/pexels-parcerografo-5968440-900.jpg" alt="Ed" />
								</div>
							</div>
						</div>
					</div>

				</main>
			</div>
		</div>
	);
};

export default Home;
