import { h } from 'preact';
import style from './style';

const CardComponent = (props) => {
    const { details } = props;

    return (
        <div>
            <div classList="card">
                <div class={style.cardMedia}>
                    {details.cover && <img class={style.cardImage} src={details.cover} />}
                </div>
            </div>
        </div>
    );
}

export default CardComponent;