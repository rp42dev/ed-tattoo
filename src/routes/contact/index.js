import { h } from 'preact';
import style from './style';
import Header from '../../components/header';
import ButtonWrapper from '../../components/buttonWrapper';

const photographs = (props) => {
	return (
		<main classList="h-100">
			<Header children={<i class="fa-solid fa-house"></i>} link="/" type="link" />
			
			<main class={style.pageContact}>
				<h1 class={style.pageTitle}>Contact me</h1>
				<div class={style.formWrapper}>
					<p class={style.pageBody}>
						<div>If you have any questions or comments, please feel free to contact me.</div>
					</p>
					<form name="contact" method="POST" data-netlify="true" action="/contact/success" data-netlify-honeypot="bot-field">
						<input type="hidden" name="form-name" value="contact" />
						<p>
							<input type="text" name="name" placeholder="Name" required />
						</p>
						<p>
							<input type="email" name="email" placeholder="E-Mail" required />
						</p>
						<p>
							<textarea name="message" placeholder="Message" />
						</p>

						<ButtonWrapper children={<i class="fa-solid fa-paper-plane"></i>} text="Contact me" type="submit" />
					</form>
				</div>
			</main>
		</main>
	);
};

export default photographs;
