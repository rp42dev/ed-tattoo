import { usePrerenderData } from '@preact/prerender-data-provider';
import { useEffect } from 'preact/hooks';
import Markdown from 'markdown-to-jsx';
import Header from '../../components/header';

import style from './style';

const Blog = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	useEffect(() => {
		const sctollToTop = () => {
			window.scrollTo(0, 0);
		};
		sctollToTop();
	}, []);

	return (
		<>
			<Header links='blogs' />

			<main class={style.blogcontainer}>
				{getBlogBody(data, isLoading)}
			</main>
		</>
	);
};


function getBlogBody(data, isLoading) {

	if (data && data.data) {
		const { details, content } = data.data;

		const jpg = '../' + details.cover
		const webp = jpg + '.webp';
		return (
			<div>
				<div class={style.blogImage}>
				{details.cover && <picture class={style.blogcover}>
					<source srcset={webp} type="image/webp" />
					<source srcset={jpg} type="image/jpeg" />
					<img src={jpg} alt={details.title} />
				</picture>}
				</div>
				<div class={style.blogbody}>
					<div className="title"><h2 class={style.blogtitle}>{details.title}</h2></div>
					<Markdown options={{ forceBlock: true }}>{content}</Markdown>
				</div>
			</div>
		);
	}
}

export default Blog;
