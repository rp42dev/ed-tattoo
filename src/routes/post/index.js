import { usePrerenderData } from '@preact/prerender-data-provider';
import { Router, route } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';
import Header from '../../components/header';
import FadeEffect from '../../components/fadeEffect';
import Notfound from '../notfound';
import { Link } from 'preact-router';
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

	const redirect = (url) => {
		route(url);
	};

	useEffect(() => {
		class SwipeEventDispatcher {
			constructor(element, options = {}) {
				this.evtMap = {
					SWIPE_LEFT: [],
					SWIPE_UP: [],
					SWIPE_DOWN: [],
					SWIPE_RIGHT: []
				};

				this.xDown = null;
				this.yDown = null;
				this.element = element;
				this.isMouseDown = false;
				this.listenForMouseEvents = true;
				this.options = Object.assign({ triggerPercent: 0.3 }, options);

				element.addEventListener('touchstart', evt => this.handleTouchStart(evt), false);
				element.addEventListener('touchend', evt => this.handleTouchEnd(evt), false);
				element.addEventListener('mousedown', evt => this.handleMouseDown(evt), false);
				element.addEventListener('mouseup', evt => this.handleMouseUp(evt), false);
			}

			on(evt, cb) {
				this.evtMap[evt].push(cb);
			}

			off(evt, lcb) {
				this.evtMap[evt] = this.evtMap[evt].filter(cb => cb !== lcb);
			}

			trigger(evt, data) {
				this.evtMap[evt].map(handler => handler(data));
			}

			handleTouchStart(evt) {
				this.xDown = evt.touches[0].clientX;
				this.yDown = evt.touches[0].clientY;
			}

			handleMouseDown(evt) {
				if (this.listenForMouseEvents == false) return;
				this.xDown = evt.clientX;
				this.yDown = evt.clientY;
				this.isMouseDown = true;
			}

			handleMouseUp(evt) {
				if (this.isMouseDown == false) return;
				const deltaX = evt.clientX - this.xDown;
				const deltaY = evt.clientY - this.yDown;
				const distMoved = Math.abs(Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY);
				const activePct = distMoved / this.element.offsetWidth;

				if (activePct > this.options.triggerPercent) {
					if (Math.abs(deltaX) > Math.abs(deltaY)) {
						deltaX < 0 ? this.trigger('SWIPE_LEFT') : this.trigger('SWIPE_RIGHT');
					} else {
						deltaY > 0 ? this.trigger('SWIPE_UP') : this.trigger('SWIPE_DOWN');
					}
				}
			}

			handleTouchEnd(evt) {
				const deltaX = evt.changedTouches[0].clientX - this.xDown;
				const deltaY = evt.changedTouches[0].clientY - this.yDown;
				const distMoved = Math.abs(Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY);
				const activePct = distMoved / this.element.offsetWidth;

				if (activePct > this.options.triggerPercent) {
					if (Math.abs(deltaX) > Math.abs(deltaY)) {
						deltaX < 0 ? this.trigger('SWIPE_LEFT') : this.trigger('SWIPE_RIGHT');
					} else {
						deltaY > 0 ? this.trigger('SWIPE_UP') : this.trigger('SWIPE_DOWN');
					}
				}
			}
		}

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
	}, []);


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
				{next &&
					<Link href={`/gallery/${next.id}`}>
						<div class={style.goNext}>
							<div class={style.next}>
								<i class="fa-solid fa-chevron-left"></i>
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
