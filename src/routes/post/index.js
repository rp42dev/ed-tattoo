import { usePrerenderData } from '@preact/prerender-data-provider';
import SwipeEventDispatcher from '../../utils/swipeEventDispatcher';
import { route } from 'preact-router';
import { useEffect } from 'preact/hooks';
import { Link } from 'preact-router';
import style from './style';
import Notfound from '../notfound';
import Header from '../../components/header';
import FadeEffect from '../../components/fadeEffect';


const Post = ({ ...props }) => {
	const [data, isLoading] = usePrerenderData(props);

	// console.log(data.url);


	if (!data && !isLoading) {
		return (
			<>
				<Notfound type="404" />
			</>
		);
	}

	return (
		<>
			<Header links={['gallery']} />
			{!isLoading &&
				< main class={style.blogcontainer}>
					{getBlogBody(data)}
				</main>
			}
		</>
	);
};


function getBlogBody(data) {
	const { details, prev, next } = data.data;

	const redirect = (url) => {
		route(url);
	};

	useEffect(() => {
		const swipe = new SwipeEventDispatcher(document.body, { triggerPercent: 0.3 });
		swipe.on('SWIPE_LEFT', () => {
			if (next) {
				redirect(`/gallery/${next.id}`);
			}
		});
		swipe.on('SWIPE_RIGHT', () => {
			if (prev) {
				redirect(`/gallery/${prev.id}`);
			}
		});
	}, [prev, next]);


	if (!details) return null;

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
				{next &&
					<Link href={`/gallery/${next.id}`}>
						<div class={style.goNext}>
							<div class={style.next}>
								<i class="fa-solid fa-chevron-right"></i>
							</div>
						</div>
					</Link>
				}
				{prev &&
					<Link href={`/gallery/${prev.id}`}>
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
