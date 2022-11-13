import { usePrerenderData } from '@preact/prerender-data-provider';
import { useEffect } from 'preact/hooks';
import Header from '../../components/header';
import FadeEffect from '../../components/fadeEffect';

import style from './style';

const Post = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	useEffect(() => {
		const sctollToTop = () => {
			window.scrollTo(0, 0);
		};
		sctollToTop();
	}, []);

	return (
		<>
			<Header links='gallery' />

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
			<FadeEffect>
			<div class={style.blogcover}>
				{details.cover && <picture >
					<source srcset={webp} type="image/webp" />
					<source srcset={jpg} type="image/jpeg" />
					<img src={jpg} alt={details.title} />
				</picture>}
			</div>
			</FadeEffect>
		);
	}
}

export default Post;
