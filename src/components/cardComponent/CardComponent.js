import { h } from 'preact';
import style from './style';


const CardComponent = (props) => {
    const { details } = props;
    
    const jpg = '../' + details.cover.replace('.jpg', '-900.jpg');
    const webp = jpg + '.webp';


    return (
        <div>
            <div classList="card border-0 shadow">
                <div classList={style.cardMedia}>
                    {details.cover && <picture classList="rounded card-img">
                        <source srcset={webp} type="image/webp" />
                        <source srcset={jpg} type="image/jpeg" />
                        <img src={jpg} alt={details.title} />
                    </picture>}
                </div>
                <div classList={style.imgOverlay}>
                    <h5 classList="card-title">{details.title}</h5>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;