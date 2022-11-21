import { usePrerenderData } from '@preact/prerender-data-provider';
import { useState, useEffect } from 'preact/hooks';
import style from './style';
import Header from '../../components/header';
import Hero from '../../components/hero';
import ContactForm from '../../components/forms/contact';
import Footer from '../../components/footer';

const photographs = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	const [isLoaded, setIsLoaded] = useState(false);


	useEffect(() => {
		if (!isLoading) {
			setIsLoaded(true);
		}
	}, [isLoading]);

	return (
		<>
			<Header link={['home', 'facebook', 'instagram']} />
			<main>
				<div class={style.content}>
					{isLoaded && <Hero hero={data.data.cover} isLoaded={isLoaded} displayScroll={true}>
						<ContactForm />

					</Hero>}
				</div>
			</main>
			<Footer />
		</>

	);
};

export default photographs;
