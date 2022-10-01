import { h } from 'preact';
import style from './style';

const CardComponent = (props) => {
    const { details } = props;

    return (
        <div>
            <div classList="card border-0 shadow">
                <div classList={style.cardMedia}>
                    {details.cover && <img classList="rounded card-img" src={details.cover}  />}
                </div>
                <div classList={style.imgOverlay}>
                    <h5 classList="card-title">{details.title}</h5>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;