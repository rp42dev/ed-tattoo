import { h } from 'preact';
import style from './style';
import Header from '../../components/galleryNav';

const photographs = (props) => {
	return (
		<>
			<Header />
		<main>
			<div class={style.pageContact}>
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
						<p>
							<button type="submit"><i class="h1 fa-solid fa-paper-plane"></i></button>
						</p>
					</form>
				</div>
			</div>
		</main>
		</>
	);
};

export default photographs;
