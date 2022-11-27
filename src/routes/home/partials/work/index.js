import FadeEffect from "../../../../components/fadeEffect";

import style from "./style.css";
import ScaledText from "../../../../components/scaledText";
import getGalleryListing from "../../../../components/getGallery";
import CardPlaceholder from "../../../../components/cardPlaceholder";
import Button from "../../../../components/button";



const Work = ({ ...props }) => {
    const { data, display } = props;

    const placeholders = [1, 2, 3, 4, 5, 6, 7];

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
                {data ? getGalleryListing(data, display) :
                    placeholders.map((item, index) => {
                        return (
                            <CardPlaceholder key={index} />
                        );
                    }
                    )}
            </div>
            <div class={style.navItem}>
                <Button link="gallery" text="View Gallery" type="link" />
            </div>
        </section>

    );
};

export default Work;