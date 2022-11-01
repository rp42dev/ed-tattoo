import style from './style';
import Icon from '../icon';

const HeaderData = {
	undefined: {
		link: '/',
		icon: <Icon name="home" />,
		areaLabel: "Home",
		target: "_self"
	},
	home: {
		link: '/',
		icon: <Icon name="home" />,
		areaLabel: "Home",
		target: "_self"
	},
	gallery: {
		link: '/gallery',
		icon: <Icon name="gallery" />,
		areaLabel: "Gallery",
		target: "_self"
	},
	about: {
		link: '/about',
		icon: <Icon name="about" />,
		areaLabel: "About",
		target: "_self"
	},
	contact: {
		link: '/contact',
		icon: <Icon name="contact" />,
		areaLabel: "Contact",
		target: "_self"
	},
	facebook: {
		link: 'https://www.facebook.com/edgars.graudins.1',
		icon: <Icon name="facebook" />,
		areaLabel: "Facebook",
		target: "_blank"
	},
	instagram: {
		link: 'https://www.instagram.com/edtattoo_oslo/',
		icon: <Icon name="instagram" />,
		areaLabel: "Instagram",
		target: "_blank"
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

							<a href={HeaderData[links].link} class={style.navLink} aria-label={HeaderData[links].areaLabel} target={HeaderData[links].target} rel="noopener noreferrer">
								
								{HeaderData[links].icon}
								
							</a>
						</div>
					) : (
					links.map((link, index) => {
						return (
							<div class={style.navItem} key={index}>
								<a href={HeaderData[link].link} class={style.navLink} aria-label={HeaderData[link].areaLabel} target={HeaderData[link].target} rel="noopener noreferrer">
							
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
