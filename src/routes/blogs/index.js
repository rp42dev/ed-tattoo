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
			<main>
				<div class={style.pageContent}>
					{getBlogsListing(data, isLoading)}
				</div>
			</main>
		</>
	);
};

function getBlogsListing(data, isLoading) {

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
