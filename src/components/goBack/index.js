import { h } from 'preact';
import style from './style';


const Header = (props) => {
	const { link } = props;

	return (
	<header class={style.header} >
		<a href={`${link}`} class={style.button}>
				{link === '/' ? <i class="h1 fa-solid fa-house"></i> : <i class="h1 fa-solid fa-arrow-left"></i>}
		</a>
	</header>
	);
};

export default Header;
