import Header from '../../components/header';
import style from './style';
import Hero from '../../components/hero';
import Container from '../../components/container';
import ScaledText from '../../components/scaledText';
import ButtonWrapper from '../../components/buttonWrapper';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Footer from '../../components/footer';

const ContactSuccess = (props) => {
	const [data, isLoading] = usePrerenderData(props);


	return (
		<>
			<Header links={['home', 'contact']} />
			<main>

				<div class={style.content}>
					{!isLoading && <Hero hero={data.data.cover}>
						<Container width={900} >
							<ScaledText maxFontSize={78.5} maxContainerWidth={900} minFontSize={17} tag='h1'>
							<span>Thanks</span> for message!</ScaledText>
							<ScaledText maxFontSize={44} maxContainerWidth={900} minFontSize={15} tag='p'>

								I'll be in touch soon. You can also reach me on
							</ScaledText>
							<ButtonWrapper links={["facebook", 'instagram']} text="connect" />
						</Container>
					</Hero>}
				</div>
			</main>
			<Footer />
		</>
	);
};

export default ContactSuccess;
