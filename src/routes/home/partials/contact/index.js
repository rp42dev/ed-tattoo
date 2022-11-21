
import Hero from "../../../../components/hero"
import ContactForm from "../../../../components/forms/contact"


const ContactHome = ({ ...props }) => {
    const { data } = props;

    return (
        <>
            <Hero hero={data.contactCover} isLoaded={true}>
                <ContactForm />
            </Hero>
        </>
    );
};

export default ContactHome;
