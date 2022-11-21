import style from './style';
import Header from '../../components/header';

const Notfound = () => {

    return (
        <>
            <Header links={['home', 'gallery']} />

            <main class={style.notfound}>
                <div>
                    <h1>Error 404</h1>
                    <p>That page doesn't exist.</p>
                </div>
            </main>
        </>
    )
}

export default Notfound;