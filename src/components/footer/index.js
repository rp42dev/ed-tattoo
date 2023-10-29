import FadeEffect from '../fadeEffect';
import style from "./style";
import Container from '../container'
import ScaledText from '../scaledText';
import Icon from '../icon'


const Footer = () => {

    return (
        <FadeEffect>
            <footer>
                <div className={style.footer}>
                    <Container width="1920">
                        <div className={style.footerHeader}>
                            <ScaledText maxFontSize={36} maxContainerWidth={400} minFontSize={26} >
                                <h2><span>Ed</span> Tattoo</h2>
                            </ScaledText>
                        </div>
                        <div className={style.footerContainer}>
                            <div className={style.container}>
                                <div className={style.footerContent}>
                                    <div className={style.footerIcon}>
                                        <a href="https://goo.gl/maps/tpki7Zt725WVUs8b8" target="_blank">
                                            <Icon className={style.icon} name="map" />
                                        </a>
                                    </div>
                                    <div className={style.footerContentText}>
                                        <h3><span>&#8203; Ed Tattoo</span></h3>
                                        <p className={style.footerContentAddress}>
                                            Tattoo studio, Tattoos that last a lifetime! <br />
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className={style.container}>
                                <div className={style.footerContent}>
                                    <div className={style.footerIcon}>
                                        <a href="tel:+4746588983">
                                            <Icon className={style.icon} name="phone" />
                                        </a>
                                    </div>
                                    <div className={style.footerContentText}>
                                        <h3><span>&#8203; Contact</span></h3>
                                        <p className={style.footerContentAddress}>
                                            <span><a href="mailto:edgarstattoo@gmail.com">edgarstattoo@gmail.com</a></span> <br />
                                            <span><a href="tel:+7446588982">Phone: +47 465 88 983</a></span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={style.container}>
                                <div className={style.footerContent}>
                                    <div className={style.footerIcon}>
                                        <a href="https://www.instagram.com/edtattoo_oslo/" target="_blank" rel="noopener noreferrer">
                                            <Icon className={style.icon} name="social" />
                                        </a>
                                    </div>
                                    <div className={style.footerContentText}>
                                        <h3><span>&#8203; Connect</span></h3>
                                        <div className={style.socialMedia}>
                                            <p>
                                                <span>
                                                    <a href="https://www.facebook.com/edgars.graudins.1" target="_blank" rel="noopener noreferrer">
                                                        Facebook <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </span>

                                                <span>
                                                    <a href="https://www.instagram.com/edtattoo_oslo/" target="_blank" rel="noopener noreferrer">
                                                        Instagram <i className="fab fa-instagram"></i>
                                                    </a>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.footerBottom}>
                            <p>© 2023 Ed Tattoo</p>
                            <p>Website Developed by | <a href="https://iammobilefriendly.dev/" target="_blank" rel="noopener noreferrer">I Am Mobile Friendly</a></p>
                        </div>
                    </Container>
                </div>
            </footer>
        </FadeEffect>
    )
}

export default Footer;