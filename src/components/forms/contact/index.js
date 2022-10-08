import IconWrapper from "../../buttonWrapper";
import style from "./style.css";
import Container from "../../container";
import ScaledText from "../../scaledText";


const ContactForm = () => {
    return (

        <Container width="900" margin="auto" >
            <ScaledText children={<h1><span>Contact</span> Me</h1>} maxFontSize={36} maxContainerWidth={900} minFontSize={16} />
            <ScaledText maxFontSize={26} maxContainerWidth={900} minContainerWidth={0} minFontSize={16} >
                <p>
                    Feel free to contact me for any questions or
                    bookings. I'll get back to you as soon as possible.
                </p>
            </ScaledText>
            <div class={style.formWrapper}>

                <form name="contact" method="POST" data-netlify="true" action="/contact/success" data-netlify-honeypot="bot-field">

                    <input type="hidden" name="form-name" value="contact" />

                    <input type="text" name="name" placeholder="Name" required />


                    <input type="email" name="email" placeholder="E-Mail" required />

                    <textarea name="message" placeholder="Message" />


                    <IconWrapper link="send" text="Submit" type="submit" />
                </form>
            </div>
        </Container>

    );
}

export default ContactForm