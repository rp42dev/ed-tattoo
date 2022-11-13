import FadeEffect from "../../../../components/fadeEffect";

import Button from "../../../../components/button";
import ScaledText from "../../../../components/scaledText";
import getGalleryListing from "../../../../components/getGallery";

import style from "./style.css";


const Work = ({ ...props }) => {
    const { data, isLoading, display } = props;

    return (

        <section class={style.latestWork}>
            <div class={style.latestWorkHeader}>
                <FadeEffect>
                    <ScaledText maxFontSize={55} maxContainerWidth={400} minFontSize={38} tag='h2'>
                        <span>Latest</span> Work
                    </ScaledText>
                </FadeEffect>
            </div>
            <div class={style.gallery}>
                {getGalleryListing(data, isLoading, display)}
            </div>
            <div class={style.navItem}>
                <Button link="gallery" text="View Gallery" type="link" />
            </div>
        </section>

    );
};

export default Work;