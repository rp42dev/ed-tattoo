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
				<video autoPlay muted loop>
					<source src="../../assets/bg.webm" type="video/webm" />
				</video>
				<div class={style.overlay}>
					<div class={style.text}>
						<h1>Ed Tattoo</h1>
						<p>Healthcare is a right, not a privilege.</p>

						<div class={style.buttonContainer}>
							<a href="/blogs" class={style.button}>Learn More</a>
							<a href="/contact" class={style.button}>Contact Us</a>
						</div>
					</div>
				</div>
			</div>

			{/* Card section */}
			<div class={style.pageSection}>
				<div class={style.title}>
					<h2>Our Services</h2>
					<p>Healthcare is a right, not a privilege.</p>
				</div>
				<div class={style.cardContainer}>

					{getBlogsListing(data, isLoading)}

				</div>
			</div>
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
