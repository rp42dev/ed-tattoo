import { h } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Markdown from 'markdown-to-jsx';
import Header from '../../components/goBack';

import style from './style';

const blogs = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	return (
		<>
			<Header link='/blogs'/>

			<article class={style.blogcontainer}>
				{getBlogBody(data, isLoading)}
			</article>
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

				{details.cover && <picture class={style.blogcover}>
					<source srcset={webp} type="image/webp" />
					<source srcset={jpg} type="image/jpeg" />
					<img src={jpg} alt={details.title} />
				</picture>}
				<div class={style.blogbody}>
					<div className="title"><h1 class={style.blogtitle}>{details.title}</h1></div>
					<Markdown options={{ forceBlock: true }}>{content}</Markdown>
				</div>
			</div>
		);
	}
}

export default blogs;
