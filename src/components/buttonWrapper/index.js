

import Icon from '../icon';
import style from './style';


const LinkData = {
    back: {
        icon: <Icon name="back" />,
        link: "/",
        label: "Go Back",
    },
    more: {
        link: "about",
        icon: <Icon name="more" />,
        label: "Read More",
    },
    send: {
        icon: <Icon name="send" />,
        link: "/contact/success",
        label: "Send",
    },
    map: {
        icon: <Icon name="map" />,
        link: 'https://goo.gl/maps/bUoCL1oe9fGyFZ3M9',
        label: "Locate me",
        nenwTab: true,
    },
    home: {
        link: '/',
        icon: <Icon name="home" />,
        label: "Home",
    },
    gallery: {
        link: '/gallery',
        icon: <Icon name="gallery" />,
        label: "Gallery",
    },
    about: {
        link: '/about',
        icon: <Icon name="about" />,
        label: "About",
    },
    contact: {
        link: '/contact',
        icon: <Icon name="contact" />,
        label: "Contact",
    },
    phone: {
        link: 'tel:+4746588983',
        icon: <Icon name="phone" />,
        label: "Call Me",
        nenwTab: true,
    },
    facebook: {
        link: 'https://www.facebook.com/edgars.graudins.1',
        icon: <Icon name="facebook" />,
        label: "Facebook",
        nenwTab: true,
    },
    instagram: {
        link: 'https://www.instagram.com/edtattoo_oslo/',
        icon: <Icon name="instagram" />,
        label: "Instagram",
        nenwTab: true,
    },
};


const IconWrapper = ({ children, ...props }) => {
    const { link, text, type } = props;

    return (
        <>
            {type === "link" ? (
                <a href={LinkData[link].link} classList={style.btnWrapper} target={LinkData[link].nenwTab ? "_blank" : ""}>
                    <span>{text}</span>
                    {LinkData[link].icon}
                </a>

            ) : (
                <button type="submit" classList={style.btnWrapper} target={LinkData[link].nenwTab ? "_blank" : ""}>
                    <span>{text}</span>
                    {LinkData[link].icon}
                </button>
            )}
        </>
    );
};

export default IconWrapper;
