import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { ChattyButton } from '../chattyButton/ChattyButton';


const Header = () => (
	<header class={style.header}>
		<Link href="/"><h1>Ed Tattoo</h1></Link>
		<ChattyButton />
		<nav>
			<Link activeClassName={style.active} href="/blogs">My Work</Link>
			<Link activeClassName={style.active} href="/contact">Contact me</Link>
		</nav>
	</header>
);

export default Header;
