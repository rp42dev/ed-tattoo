import { h } from 'preact';
import { Link } from 'preact-router';
import { usePrerenderData } from '@preact/prerender-data-provider';
import CardComponent from '../../components/cardComponent/CardComponent';
import Header from '../../components/galleryNav';

import style from './style';


const blogs = (props) => {

	const [data, isLoading] = usePrerenderData(props);
	return (
		<>
			<Header />
			<main classList="mx-auto my-5 pt-5 px-1 px-sm-4">
				<div class={style.pageContent}>
					{getBlogsListing(data, isLoading)}
				</div>
			</main>
		</>
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
				{blogs.edges.map(blog => (
					<Link href={`/blog/${blog.id}`}>
						<CardComponent details={blog.details} />
					</Link>
				))}
			</>
		);
	}
}

export default blogs;
