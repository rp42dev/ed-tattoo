import { useEffect } from 'preact/hooks';
import style from './style';
import Icon from '../icon';

const HeaderData = {
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


	useEffect(() => {
		const header = document.querySelector('header');
		const headerHeight = header.offsetHeight;
		const headerOffset = header.offsetTop;
		const headerOffsetBottom = headerHeight + headerOffset;

		const onScroll = () => {
			const scrollPosition = window.scrollY;

			console.log('scrolling');

			if (scrollPosition >= headerOffsetBottom) {
				header.classList.add('sticky');
			} else {
				header.classList.remove(style.sticky);
			}
		};

		document.addEventListener('scroll', onScroll);

		// return () => document.removeEventListener('scroll', onScroll);
	}, []);

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
