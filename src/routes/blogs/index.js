import { h } from 'preact';
import { Link } from 'preact-router';
import { usePrerenderData } from '@preact/prerender-data-provider';
import getBlogsListing from '../../utils/getBlogs';
import CardComponent from '../../components/cardComponent';
import Header from '../../components/header';

import style from './style';


const Blogs = (props) => {

	const [data, isLoading] = usePrerenderData(props);
	return (
		<>
			<Header children={<i class="fa-solid fa-house"></i>} link="/" type="link" />

			<section class={style.gallery}>
				{getBlogsListing(data, isLoading)}
			</section>

		</>
	);
};

export default Blogs;
