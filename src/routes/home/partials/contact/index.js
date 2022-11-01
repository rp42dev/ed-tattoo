
import ContactForm from "../../../../components/forms/contact"
import Hero from "../../../../components/hero"
import style from './style';

const ContactHome = ({ ...props }) => {
    const { data } = props;

    return (
        <>

            <Hero hero={data.contactCover} isLoaded={true}>
                <div class={style.heroContact}>
                    <div class={style.pageContact}>
                        <ContactForm />
                    </div>
                </div>
            </Hero>

        </>
    );
};

export default ContactHome;
