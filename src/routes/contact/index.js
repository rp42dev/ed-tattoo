import style from './style';
import Header from '../../components/header';
import ContactForm from '../../components/forms/contact';
import Footer from '../../components/footer';

const photographs = (props) => {
	return (
		<>
			<Header link={['home', 'facebook', 'instagram']} />
			<main>
				<section class={style.pageContact}>
					<ContactForm />
				</section>
			</main>
			<div class={style.footerWrapper}>
				<Footer />
			</div>
		</>

	);
};

export default photographs;
