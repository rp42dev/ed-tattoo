import style from './style';
import { usePrerenderData } from '@preact/prerender-data-provider';
import { useState, useEffect } from 'preact/hooks';
import Header from '../../components/header';
import ContactForm from '../../components/forms/contact';
import Footer from '../../components/footer';
import Hero from '../../components/hero';

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
				{isLoaded && <Hero hero={data.data.cover} isLoaded={isLoaded}>
					<div class={style.heroContact}>
						<section class={style.pageContact}>
							<ContactForm />
						</section>
					</div>
				</Hero>	}
			</main>
			<div class={style.footerWrapper}>
				<Footer />
			</div>
		</>

	);
};

export default photographs;
