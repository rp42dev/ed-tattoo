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
	blogs: {
		link: '/blogs',
		icon: <Icon name="blogs" />,
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
		link: 'https://www.facebook.com/edtattoo/',
		icon: <Icon name="facebook" />,
		areaLabel: "Facebook",
	},
	instagram: {
		link: 'https://www.instagram.com/edtattoo/',
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

							<Link href={HeaderData[links].link} class={style.navLink} aria-label={HeaderData[links].areaLabel}>
								
								{HeaderData[links].icon}
								
							</Link>
						</div>
					) : (
					links.map((link, index) => {
						return (
							<div class={style.navItem} key={index}>
								<Link href={HeaderData[link].link} class={style.navLink} aria-label={HeaderData[link].areaLabel}>
							
									{HeaderData[link].icon}
									
								</Link>
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
