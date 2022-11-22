
import Hero from "../../../../components/hero"
import ContactForm from "../../../../components/forms/contact"


const ContactHome = ({ ...props }) => {
    const { data } = props;

    console.log(data)

    return (
        <>
            <Hero hero={data}>
                <ContactForm />
            </Hero>
        </>
    );
};

export default ContactHome;
