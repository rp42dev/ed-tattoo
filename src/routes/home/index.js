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
				<video autoPlay muted loop playsinline>
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

			{/* Card section */}
			<main>
				<div class={style.title}>
					<h2>Latest Posts</h2>
				</div>
					<p>Check out my latest posts</p>
				<div class={style.cardContainer}>

					{getBlogsListing(data, isLoading)}

				</div>
			</main>
		</div>
	);
};

function getBlogsListing(data, isLoading) {
	if (isLoading) {
		return (
			<article class={style.loadingPlaceholder}>
				<h2 class={`${style.blogtitle} loading`}>&nbsp;</h2>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
			</article>
		);
	}
	if (data && data.data) {
		const { data: blogs } = data;
		return (
			<>
				{blogs.edges.map((blog, index) => {
					if (index < 3) {
						return (
							<Link href={`/blog/${blog.id}`}>
								<CardComponent details={blog.details} />
							</Link>
						);
					}
				})}
			</>
		);
	}
}

export default Home;
