import { h } from 'preact';
import style from './style';
import Button from '../button';


const Header = ({ children, ...props }) => {
	const { link, type } = props;

	return (
		<>
			<header class={style.header} >
				<div class={style.container}>
					<Button children={children} link={link} type={type} />
				</div>
			</header>
		</>
	);
};

export default Header;
