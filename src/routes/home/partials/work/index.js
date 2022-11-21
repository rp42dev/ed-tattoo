import FadeEffect from "../../../../components/fadeEffect";

import style from "./style.css";
import ScaledText from "../../../../components/scaledText";
import getGalleryListing from "../../../../components/getGallery";
import Button from "../../../../components/button";



const Work = ({ ...props }) => {
    const { data, isLoading, display } = props;

    return (

        <FadeEffect>
            <section class={style.latestWork}>
                <div class={style.latestWorkHeader}>
                    <ScaledText maxFontSize={55} maxContainerWidth={400} minFontSize={38} tag='h2'>
                        <span>Latest</span> Work
                    </ScaledText>
                </div>
                <div class={style.gallery}>
                    {getGalleryListing(data, isLoading, display)}
                </div>
                <div class={style.navItem}>
                    <Button link="gallery" text="View Gallery" type="link" />
                </div>
            </section>
        </FadeEffect>

    );
};

export default Work;