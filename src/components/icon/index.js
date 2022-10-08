import style from './style';

const IconsData = {
    back: {
        icon: <i class="fas fa-arrow-left"></i>,
        link: "/",
    },
    more: {
        icon: <i class="fas fa-arrow-right"></i>,
        link: "about",
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
        label: "Blogs",
    },
    about: {
        icon: <i class="fas fa-user"></i>,
        link: '/about',
        label: "About",
    },
    contact: {
        icon: <i class="fas fa-envelope"></i>,
        link: '/contact',
        label: "Contact",
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

const Icon = ({...props}) => {
    const { name } = props;

    return (

        <div class={style.icon}>
            {IconsData[name].icon}
        </div>

    );
};

export default Icon;