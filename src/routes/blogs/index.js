import { usePrerenderData } from '@preact/prerender-data-provider';
import getBlogsListing from '../../components/getBlogs';
import Header from '../../components/header';

import style from './style';


const Blogs = (props) => {

	const [data, isLoading] = usePrerenderData(props);
	return (
		<>
			<Header links="home" />

			<section classList={style.section}>
				<div class={style.gallery}>
					{getBlogsListing(data, isLoading)}
					{getBlogsListing(data, isLoading)}
					{getBlogsListing(data, isLoading)}
					{getBlogsListing(data, isLoading)}
					{getBlogsListing(data, isLoading)}
					{getBlogsListing(data, isLoading)}
					{getBlogsListing(data, isLoading)}
					{getBlogsListing(data, isLoading)}
					{getBlogsListing(data, isLoading)}
				</div>
			</section>
		</>
	);
};

export default Blogs;
