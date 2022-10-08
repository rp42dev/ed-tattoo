import { useEffect } from 'preact/hooks';
import style from './style';
import Icon from '../icon';

const HeaderData = {
	undefined: {
		link: '/',
		icon: <Icon name="home" />
	},
	home: {
		link: '/',
		icon: <Icon name="home" />
	},
	blogs: {
		link: '/blogs',
		icon: <Icon name="blogs" />
	},
	about: {
		link: '/about',
		icon: <Icon name="about" />
	},
	contact: {
		link: '/contact',
		icon: <Icon name="contact" />
	},
	facebook: {
		link: 'https://www.facebook.com/edtattoo/',
		icon: <Icon name="facebook" />
	},
	instagram: {
		link: 'https://www.instagram.com/edtattoo/',
		icon: <Icon name="instagram" />
	},
};

const Header = ({ ...props }) => {
	const { links } = props;

	return (
		<>
			<header class={style.header} >
				<div class={style.navContainer}>
					{!Array.isArray(links) ? (

						<div class={style.navItem}>
							<a href={HeaderData[links].link} class={style.navLink}>
								{HeaderData[links].icon}
							</a>
						</div>
					) : (
					links.map((link, index) => {
						return (
							<div class={style.navItem} key={index}>
								<a href={HeaderData[link].link} class={style.navLink}>
									{HeaderData[link].icon}
								</a>
							</div>
						);
					})
				)}
				</div>
			</header>
		</>
	);
};

export default Header;
