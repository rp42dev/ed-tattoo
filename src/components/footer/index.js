import Container from '../container'
import Icon from '../icon'
import ScaledText from '../scaledText';
import style from "./style";


const Footer = () => {

    return (
        <>
            <footer className={style.footer}>
                <Container width="1920">
                    <div className={style.footerHeader}>
                        <ScaledText maxFontSize={36} maxContainerWidth={900} minFontSize={16}>
                            <h3><span>Ed</span> Tattoo</h3>
                        </ScaledText>
                    </div>
                    <div className={style.footerContainer}>
                        <div className={style.container}>
                            <div className={style.footerContent}>
                                <div className={style.footerIcon}>
                                    <Icon className={style.icon} name="address" />
                                </div>
                                <div className="footerContentText">
                                    <h3><span>&#8203; Address</span></h3>
                                    <p className={style.footerContentAddress}>
                                        <span>Hans Egedes vei 12,</span> <br />
                                        <span>Lorenskog 1470, Oslo</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={style.container}>
                            <div className={style.footerContent}>
                                <div className={style.footerIcon}>
                                    <Icon className={style.icon} name="phone" />
                                </div>
                                <div className={style.footerContentText}>
                                    <h3><span>&#8203; Contact</span></h3>
                                    <p className={style.footerContentAddress}>
                                        <span>edgarstattoo@gmail.com</span> <br />
                                        <span>Phone: +47 900 00 000</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={style.container}>
                            <div className={style.footerContent}>
                                <div className={style.footerIcon}>
                                    <Icon className={style.icon} name="social" />
                                </div>
                                <div className="footerContentText">
                                    <h3><span>&#8203; Connect</span></h3>
                                    <div className={style.socialMedia}>
                                        <p>
                                            <span>
                                                Facebook <a href="https://www.facebook.com/edgars.graudins.1" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </span>

                                            <span>
                                                Instagram <a href="https://www.instagram.com/edtattoo_oslo/" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.footerBottom}>
                        <p>© 2020 Ed Tattoo</p>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer;