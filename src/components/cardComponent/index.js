import style from './style';
import FadeEffect from '../fadeEffect';


const CardComponent = (props) => {
    const { details } = props;

    const extenstion = details.cover.split('.').pop();
    const image = details.cover.replace(`.${extenstion}`, `-thumbnail.${extenstion}`);
    const webp = `${image}.webp`;

    return (
        <FadeEffect>
            <div class={style.card}>
                {details.cover && <picture>
                    <source srcset={webp} type="image/webp" />
                    <source srcset={image} type="image/jpeg" />
                    <img src={image} alt={details.title} />
                </picture>}
            </div>
        </FadeEffect>

    );
}

export default CardComponent;