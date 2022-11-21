import { usePrerenderData } from '@preact/prerender-data-provider';
import { useEffect } from 'preact/hooks';
import Header from '../../components/header';
import FadeEffect from '../../components/fadeEffect';
import Notfound from '../notfound';
import style from './style';


const Post = ({ ...props }) => {
	const [data, isLoading] = usePrerenderData(props);

	if (!data && !isLoading) {
		return (
			<>
				<Notfound type="404" />
			</>
		);
	}

	return (
		<>
			<Header links='gallery' />

			{isLoading ? (
				<div class={style.loading}>
					<div class={style.loader} />
				</div>
			) : (
				< main class={style.blogcontainer}>
					{getBlogBody(data)}
				</main>
			)}
		</>
	);
};


function getBlogBody(data) {
	const { details, prev, next } = data.data;

	if (!details) return null;

	const jpg = '../' + details.cover
	const webp = jpg + '.webp';
	return (
		<FadeEffect>
			<div class={style.blogcover}>
				{details.cover && <picture >
					<source srcset={webp} type="image/webp" />
					<source srcset={jpg} type="image/jpeg" />
					<img src={jpg} alt={details.title} height="60" />
				</picture>}
			</div>
			{next && <div class={style.goNext}>
				<a href={next.id} class={style.next}>
					<i class="fa-solid fa-chevron-right" />
				</a>
			</div>}
			{prev && <div class={style.goPrev}>
				<a href={prev.id} class={style.prev}>
					<i class="fa-solid fa-chevron-left"></i>
				</a>
			</div>}
		</FadeEffect>
	);

}

export default Post;
