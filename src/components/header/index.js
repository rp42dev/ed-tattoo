import style from './style';
import Icon from '../icon';


const Header = ({ children, ...props }) => {
	const { link } = props;

	return (
		<>
			<header class={style.header} >
				<div class={style.container}>
					<a href={link}>
						<Icon children={children} />
					</a>
				</div>
			</header>
		</>
	);
};

export default Header;
