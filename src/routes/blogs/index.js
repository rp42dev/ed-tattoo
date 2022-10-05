import { h } from 'preact';
import { Link } from 'preact-router';
import { usePrerenderData } from '@preact/prerender-data-provider';
import CardComponent from '../../components/cardComponent';
import Header from '../../components/header';

import style from './style';


const Blogs = (props) => {

	const [data, isLoading] = usePrerenderData(props);
	return (
		<main>
			<Header children={<i class="fa-solid fa-house"></i>} link="/" type="link" />
			<div class={style.pageContent}>
				{getBlogsListing(data, isLoading)}
			</div>
		</main>
	);
};

function getBlogsListing(data, isLoading) {

	if (data && data.data) {
		const { data: galley } = data;
		return (
			<>
				{galley.edges.map(blog => (
					<Link href={`/blog/${blog.id}`}>
						<CardComponent details={blog.details} />
					</Link>
				))}
			</>
		);
	}
}

export default Blogs;
