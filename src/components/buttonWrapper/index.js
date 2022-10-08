import { h } from 'preact';
import style from './style';
import Icon from '../icon';

const LinkData = {
    back: {
        icon: <Icon name="back" />,
        link: "/",
    },
    more: {
        link: "about",
        icon: <Icon name="more" />
    },
    send: {
        icon: <Icon name="send" />,
        link: "/contact/success",
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
        link: 'https://www.facebook.com/edgars.graudins.1',
        icon: <Icon name="facebook" />
    },
    instagram: {
        link: 'https://www.instagram.com/edtattoo_oslo/',
        icon: <Icon name="instagram" />
    },
};


const IconWrapper = ({ children, ...props }) => {
    const { link, text, type } = props;

    return (
        <>
            {type === "link" ? (

                <a href={LinkData[link].link} classList={style.btnWrapper}>
                    <span>{text}</span>
                    {LinkData[link].icon}
                </a>

            ) : (
                <button type="submit" classList={style.btnWrapper}>
                    <span>{text}</span>
                    {LinkData[link].icon}
                </button>
            )}
        </>
    );
};

export default IconWrapper;
