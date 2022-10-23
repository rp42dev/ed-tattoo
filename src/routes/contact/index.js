import style from './style';
import Header from '../../components/header';
import ContactForm from '../../components/forms/contact';

const photographs = (props) => {
	return (
		<>
			<Header link={['home', 'facebook', 'instagram']}/>
			<main>
				<section class={style.pageContact}>
					<ContactForm />
				</section>
			</main>
		</>

	);
};

export default photographs;
