import { useEffect, useState } from 'preact/hooks';

import IconWrapper from "../../../../components/buttonWrapper";
import ScaledText from "../../../../components/scaledText";
import getGalleryListing from "../../../../components/getGallery";

import style from "./style.css";


const Work = ({ ...props }) => {
    const { data, isLoading, display } = props;

    return (

        <section class={style.latestWork}>
            <div class={style.latestWorkHeader}>

                <ScaledText maxFontSize={36} maxContainerWidth={400} minFontSize={26} >
                    <h2><span>Latest</span> Work</h2>
                </ScaledText>

            </div>
            <div class={style.gallery}>
                {getGalleryListing(data, isLoading, display)}
            </div>
        <div class={style.navItem}>
            <IconWrapper link="gallery" text="View Gallery" type="link" />
        </div>
        </section>

    );
};

export default Work;