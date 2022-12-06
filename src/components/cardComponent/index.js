import { useState, useRef, useEffect } from 'preact/hooks';
import style from './style';
import FadeEffect from '../fadeEffect';


const CardComponent = (props) => {
    const { details } = props;
    const [isLoaded, setIsLoaded] = useState(false);

    const extenstion = details.cover.split('.').pop();
    const image = details.cover.replace(`.${extenstion}`, `-thumbnail.${extenstion}`);
    const image_small = details.cover.replace(`.${extenstion}`, `-thumbnail-small.${extenstion}`);
    const image_large = details.cover.replace(`.${extenstion}`, `-thumbnail-large.${extenstion}`);

    const webp = `${image}.webp`;
    const webp_small = `${image_small}.webp`;
    const webp_large = `${image_large}.webp`;

    const handleLoad = () => {
        setIsLoaded(true);
    }

    return (
        <div class={style.card}>
            <FadeEffect>
                {details.cover && <picture class={style.loader}>
                    <source srcset={`${webp_large} 1200w, ${webp} 600w, ${webp_small} 600w`} type="image/webp" />
                    <img src={image} alt={details.title} onLoad={handleLoad} />
                </picture>}
                <div class={!isLoaded ? style.loading : ''}></div>
            </FadeEffect>
        </div>
    );
}

export default CardComponent;