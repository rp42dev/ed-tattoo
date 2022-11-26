import { usePrerenderData } from '@preact/prerender-data-provider';
import SwipeEventDispatcher from '../../utils/swipeEventDispatcher';
import { route } from 'preact-router';
import { useEffect } from 'preact/hooks';
import { Link } from 'preact-router';
import style from './style';
import Notfound from '../notfound';
import Header from '../../components/header';
import FadeEffect from '../../components/fadeEffect';
import Tooltip from '../../components/tooltip';


const Post = ({ ...props }) => {
	const [data, isLoading] = usePrerenderData(props);

	if (isLoading) return null;
	if (!data.data) return (<><Notfound /></>);

	return (
		<>
			<Header links={['gallery']} />
			< main class={style.blogcontainer}>
				{getBlogBody(data)}
			</main>
		</>
	);
};


function getBlogBody(data) {
	const { details, prev, next } = data.data;
	if (!details) return null;

	const redirect = (url) => {
		route(url);
	};

	useEffect(() => {
		const swipe = new SwipeEventDispatcher(document.body, { triggerPercent: 0.3 });
		swipe.on('SWIPE_LEFT', () => {
			if (next) {
				redirect(`/gallery/${next.slug}/`);
			}
		});
		swipe.on('SWIPE_RIGHT', () => {
			if (prev) {
				redirect(`/gallery/${prev.slug}/`);
			}
		});
	}, [prev, next]);

	const jpg = details.cover
	const webp = jpg + '.webp';
	return (
		<FadeEffect>
			<div class={style.blogcover}>
				<picture >
					<source srcset={webp} type="image/webp" />
					<img src={jpg} alt={`A picture of ${details.title}`} />
				</picture>
				{next &&
					<Link href={`/gallery/${next.slug}/`} aria-label={`Next: Image`}>
						<div class={style.goNext}>
							<div class={style.next}>
								<i class="fa-solid fa-chevron-right"></i>
							</div>
						</div>
					</Link>
				}
				{prev &&
					<Link href={`/gallery/${prev.slug}/`} aria-label={`Previous: Image`}>
						<div class={style.goPrev}>
							<div class={style.prev}>
								<i class="fa-solid fa-chevron-left"></i>
							</div>
						</div>
					</Link>
				}
			</div>
		</FadeEffect>
	);

}

export default Post;
