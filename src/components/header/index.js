import style from './style';
import Icon from '../icon';

const HeaderData = {
	"undefined": {
		"link": '/',
		"label": "Home",
		"target": "_self"
	},
	"home": {
		"link": '/',
		"label": "Home",
		"target": "_self"
	},
	"gallery": {
		"link": '/gallery',
		"label": "Gallery",
		"target": "_self"
	},
	"about": {
		"link": '/about',
		"label": "About",
		"target": "_self"
	},
	"contact": {
		"link": '/contact',
		"label": "Contact",
		"target": "_self"
	},
	"facebook": {
		"link": 'https://www.facebook.com/edgars.graudins.1',
		"label": "Facebook",
		"target": "_blank"
	},
	"instagram": {
		"link": 'https://www.instagram.com/edtattoo_oslo/',
		"label": "Instagram",
		"target": "_blank"
	},
};

const Header = ({ ...props }) => {
	const { links } = props;

	if (!Array.isArray(links) || links === undefined) {
		return null;
	}

	return (
		<>
			<header class={style.header} >
				<div class={style.navContainer}>
						{links.map((link, index) => {
							return (
								<div class={style.navItem} key={index}>
									<a href={HeaderData[link].link} class={style.navLink} aria-label={HeaderData[link].label} target={HeaderData[link].target} rel="noopener noreferrer">
										<Icon name={link} />
									</a>
								</div>
							);
						})}
				</div>
			</header>
		</>
	);
};

export default Header;
