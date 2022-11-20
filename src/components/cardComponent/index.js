import style from './style';
import FadeEffect from '../fadeEffect';


const CardComponent = (props) => {
    const { details } = props;

    const jpg = '../' + details.cover.replace('.jpg', '-thumbnail.jpg');
    const webp = jpg + '.webp';


    return (
        <FadeEffect>
            <div class={style.card}>

                {details.cover && <picture>
                    <source srcset={webp} type="image/webp" />
                    <source srcset={jpg} type="image/jpeg" />
                    <img src={jpg} alt={details.title} />
                </picture>}
                <div classList={style.imgOverlay}>

                </div>

            </div>
        </FadeEffect>

    );
}

export default CardComponent;