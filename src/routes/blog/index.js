import { h } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Markdown from 'markdown-to-jsx';
import Header from '../../components/goBack';

import style from './style';

const blogs = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	return (
		<>
			<Header />
		<main classList="mx-auto my-5 pt-5 px-1 px-sm-4">
			<article class={style.blogcontainer}>
				{getBlogBody(data, isLoading)}
			</article>
		</main>
		</>
	);
};


function getBlogBody(data, isLoading) {
	if (isLoading) {
		return (
			<div class={style.loadingPlaceholder}>
				<h1 class={`${style.blogtitle} loading`} >&nbsp;</h1>
				<caption class={`${style.blogsubtitle} loading`}>&nbsp;</caption>
				<div class={style.blogbody}>
					<div class={`${style.loadingBody} loading`} />
					<div class={`${style.loadingBody} loading`} />
					<div class={`${style.loadingBody} loading`} />
				</div>
			</div>
		);
	}

	if (data && data.data) {
		const { details, content } = data.data;
		return (
			<div>
				<div className="title"><h1 class={style.blogtitle}>{details.title}</h1></div>
				
				{ details.subtitle && <caption class={style.blogsubtitle}>{details.subtitle}</caption> }
				{ details.cover && <div class={style.blogcover} style={`background-image:url(${details.cover})`} /> }
				<div class={style.blogbody}>
					<Markdown options={{ forceBlock: true }}>{content}</Markdown>
				</div>
			</div>
		);
	}
}

export default blogs;
