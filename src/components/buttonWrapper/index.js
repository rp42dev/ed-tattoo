

import Icon from '../icon';
import style from './style';


const LinkData = {
    back: {
        icon: <Icon name="back" />,
        link: "/",
        areaLabel: "Go Back",
    },

    map: {
        icon: <Icon name="map" />,
        link: 'https://goo.gl/maps/bUoCL1oe9fGyFZ3M9',
        areaLabel: "Locate me",
        target: "_blank",
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
    phone: {
        link: 'tel:+4746588983',
        icon: <Icon name="phone" />,
        areaLabel: "Call Me",
        target: "_blank",
    },
    facebook: {
        link: 'https://www.facebook.com/edgars.graudins.1',
        icon: <Icon name="facebook" />,
        areaLabel: "Facebook",
        target: "_blank",
    },
    instagram: {
        link: 'https://www.instagram.com/edtattoo_oslo/',
        icon: <Icon name="instagram" />,
        areaLabel: "Instagram",
        target: "_blank",
    },
};


const ButtonWrapper = ({ children, ...props }) => {
    const { links, text } = props;

    return (
        <>
            <div className={style.btnWrapper}>
                <span>{text}</span>
                {!Array.isArray(links) ? (

                    <a href={LinkData[links].link} areaLabel={LinkData[links].areaLabel} target={LinkData[links].target} rel="noopener noreferrer">
                        {LinkData[links].icon}
                    </a>

                ) : (
                    links.map((link, index) => {

                        return (
                            <a key={index} href={LinkData[link].link} areaLabel={LinkData[link].areaLabel} target={LinkData[link].target} rel="noopener noreferrer">
                                {LinkData[link].icon}
                            </a>
                        )

                    })
                )}
            </div>
        </>
    );
};

export default ButtonWrapper;
