
import Hero from "../../../../components/hero"
import ContactForm from "../../../../components/forms/contact"


const ContactHome = ({ ...props }) => {
    const { data } = props;
    
    return (
        <>
            <Hero hero={data}>
                <ContactForm />
            </Hero>
        </>
    );
};

export default ContactHome;
