import { h } from 'preact';
import style from './style';
import Header from '../../components/header';
import ContactForm from '../../components/forms/contact';

const photographs = (props) => {
	return (
		<>
			<Header children={<i class="fa-solid fa-house"></i>} link="/" type="link" />
			<main>
				<section class={style.pageContact}>
					<ContactForm />
				</section>
			</main>
		</>

	);
};

export default photographs;
