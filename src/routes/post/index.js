import { usePrerenderData } from '@preact/prerender-data-provider';
import { useEffect } from 'preact/hooks';
import Header from '../../components/header';
import FadeEffect from '../../components/fadeEffect';
import Notfound from '../notfound';

import style from './style';

const Post = ({ ...props }) => {

	var url_path = window.location.pathname;
	var url_hash = window.location.hash;
	if (url_path.endsWith("/") || url_hash.endsWith("/")) {
		if (url_path !== "/") {
			return (
				<>
					<Notfound type="404" />
				</>
			);
		}
	}

	const [data, isLoading] = usePrerenderData(props);

	if (!data) {
		return (
			<>
				<Notfound type="404" />
			</>
		);
	}

	return (
		<>
			<Header links='gallery' />

			{!data ? (
				<div class={style.loading}>
					<div class={style.loader} />
				</div>
			) : (
				< main class={style.blogcontainer}>
					{getBlogBody(data, isLoading)}
				</main>
			)}
		</>
	);
};


function getBlogBody(data) {
	const { details } = data.data;

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

export default Post;
