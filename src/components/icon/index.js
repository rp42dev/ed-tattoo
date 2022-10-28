import Tooltip from '../tooltip';
import style from './style';

const IconsData = {
    back: {
        icon: <i class="fas fa-arrow-left"></i>,
        link: "/",
        label: "Go Back",
    },
    more: {
        icon: <i class="fas fa-arrow-right"></i>,
        link: "about",
        label: "Read More",
    },
    send: {
        icon: <i class="fas fa-paper-plane"></i>,
        link: "/contact/success",
        label: "Send",
    },
    home: {
        icon: <i class="fas fa-home"></i>,
        link: '/',
        label: "Home",
    },
    blogs: {
        icon: <i class="fas fa-images"></i>,
        link: '/blogs',
        label: "Gallery",
    },
    about: {
        icon: <i class="fas fa-user"></i>,
        link: '/about',
        label: "About",
    },
    social: {
        icon: <i class="fas fa-share-alt"></i>,
        link: '/social',
        label: "Social",
    },
    contact: {
        icon: <i class="fas fa-envelope"></i>,
        link: '/contact',
        label: "Contact",
    },
    phone: {
        icon: <i class="fas fa-phone"></i>,
        link: 'tel:+4790000000',
        label: "Call",
    },
    address: {
        icon: <i class="fas fa-map-marker-alt"></i>,
        link: 'https://goo.gl/maps/6Z8Z1JZ8Z2J2',
        label: "Address",
    },
    facebook: {
        icon: <i class="fab fa-facebook"></i>,
        link: 'https://www.facebook.com/edgars.graudins.1',
        label: "Facebook",
    },
    instagram: {
        icon: <i class="fab fa-instagram"></i>,
        link: 'https://www.instagram.com/edtattoo_oslo/',
        label: "Instagram",
    },
};

const Icon = ({ ...props }) => {
    const { name } = props;

    return (

        <Tooltip text={IconsData[name].label}>
            <div class={style.icon}>
                {IconsData[name].icon}
            </div>
        </Tooltip>

    );
};

export default Icon;