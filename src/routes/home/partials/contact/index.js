
import ContactForm from "../../../../components/forms/contact"
import Hero from "../../../../components/hero"


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
