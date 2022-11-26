import { usePrerenderData } from '@preact/prerender-data-provider';
import style from './style';
import Header from '../../components/header';
import Hero from '../../components/hero';
import ContactForm from '../../components/forms/contact';
import Footer from '../../components/footer';

const Contact = (props) => {
	const [data, isLoading] = usePrerenderData(props);

	if (isLoading) return null;

	return (
		<>
			<Header links={['home', 'facebook', 'instagram']} />
			<main>
				<div class={style.content}>
					<Hero hero={data.data.cover}>
						<ContactForm />
					</Hero>
				</div>
			</main>
			<Footer />
		</>

	);
};

export default Contact;
