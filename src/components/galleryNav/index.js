import { h } from 'preact';
import style from './style';


const Header = () => (
	<header class={style.header} >
		<a  href="/" class={style.button}><i class="h1 fa-solid fa-house"></i></a>
	</header>
);

export default Header;
