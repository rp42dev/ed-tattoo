import { useState, useRef, useEffect } from 'preact/hooks';
import style from './style';
import FadeEffect from '../fadeEffect';


const CardComponent = (props) => {
    const { details } = props;
    const [isLoaded, setIsLoaded] = useState(false);

    const extenstion = details.cover.split('.').pop();
    const image = details.cover.replace(`.${extenstion}`, `-thumbnail.${extenstion}`);
    const webp = `${image}.webp`;

    const handleLoad = () => {
        setIsLoaded(true);
    }

    return (
        <div class={style.card}>
            <FadeEffect>
                {details.cover && <picture class={style.loader}>
                    <source srcset={webp} type="image/webp" />
                    <img src={image} alt={details.title} onLoad={handleLoad} />
                </picture>}
                <div class={!isLoaded ? style.loading : ''}></div>
            </FadeEffect>
        </div>
    );
}

export default CardComponent;