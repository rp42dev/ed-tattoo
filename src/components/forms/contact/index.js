import Button from "../../button";
import style from "./style.css";
import Container from "../../container";
import ScaledText from "../../scaledText";


const ContactForm = () => {
    return (

        <Container width="900" >
            <ScaledText maxFontSize={36} maxContainerWidth={400} minFontSize={26} >
                <h2><span>Message</span> Me</h2>
            </ScaledText>
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


                    <Button link="send" text="Submit" type="submit" />
                </form>
            </div>
        </Container>

    );
}

export default ContactForm