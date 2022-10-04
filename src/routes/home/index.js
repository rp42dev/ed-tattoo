import { h } from "preact";
import { useEffect } from 'preact/hooks';
import { Link } from 'preact-router';
import { usePrerenderData } from '@preact/prerender-data-provider';

import CardComponent from '../../components/cardComponent/CardComponent';
import style from "./style";


const Home = (props) => {
	const [data, isLoading] = usePrerenderData(props);

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
					<div class={style.text}>

						<div><h1>Ed Tattoo</h1></div>

						<div><p>
							Hi I'm Ed, I'm a tattoo artist based in the Oslo. 
							I specialise in black and grey realism and 
							I'm always looking to expand my portfolio.
						</p></div>

						<div class={style.buttonContainer}>
							<a href="/blogs" class={style.button}><i class="h1 fa-solid fa-camera"></i></a>
							<a href="/contact" class={style.button}><i class="h1 fa-solid fa-paper-plane"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Home;
