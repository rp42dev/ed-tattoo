import style from './style';
import Icon from '../icon';
import { Link } from 'preact-router';


const HeaderData = {
	undefined: {
		link: '/',
		icon: <Icon name="home" />,
		areaLabel: "Home",
	},
	home: {
		link: '/',
		icon: <Icon name="home" />,
		areaLabel: "Home",
	},
	gallery: {
		link: '/gallery',
		icon: <Icon name="gallery" />,
		areaLabel: "Gallery",
	},
	about: {
		link: '/about',
		icon: <Icon name="about" />,
		areaLabel: "About",
	},
	contact: {
		link: '/contact',
		icon: <Icon name="contact" />,
		areaLabel: "Contact",
	},
	facebook: {
		link: 'https://www.facebook.com/edgars.graudins.1',
		icon: <Icon name="facebook" />,
		areaLabel: "Facebook",
	},
	instagram: {
		link: 'https://www.instagram.com/edtattoo_oslo/',
		icon: <Icon name="instagram" />,
		areaLabel: "Instagram",
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

							<a href={HeaderData[links].link} class={style.navLink} aria-label={HeaderData[links].areaLabel} target="_blank" rel="noopener noreferrer">
								
								{HeaderData[links].icon}
								
							</a>
						</div>
					) : (
					links.map((link, index) => {
						return (
							<div class={style.navItem} key={index}>
								<a href={HeaderData[link].link} class={style.navLink} aria-label={HeaderData[link].areaLabel} target="_blank" rel="noopener noreferrer">
							
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
