import { h } from 'preact';
import style from './style';


const Header = () => (
	<header class={style.header} >
		<a href="/blogs" class={style.button}>
			<i class="h1 fa-solid fa-arrow-left"></i>
		</a>
	</header>
);

export default Header;
