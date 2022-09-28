import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";

const Home = () => {

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
			<div class={style.imageContainer}>
				<div class={style.image} />
				<div class={style.overlay} />
				<div class={style.content}>
					<h1>Hi, I'm <span class={style.name}>Ed</span></h1>
					<p>I'm a Tattoo Artist located in Oslo </p>
				</div>
			</div>
		</div>
	);
};

export default Home;
