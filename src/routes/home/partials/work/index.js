import IconWrapper from "../../../../components/buttonWrapper";
import ScaledText from "../../../../components/scaledText";
import getBlogsListing from "../../../../components/getBlogs";

import style from "./style.css";


const Work = ({ ...props }) => {
    const { data, isLoading, display } = props;

    return (

        <section class={style.latestWork}>
            <div class={style.container}>
                <div class={style.latestWorkHeader}>

                    <ScaledText maxFontSize={36} maxContainerWidth={900} minFontSize={16}>
                        <h2><span>Latest</span> Work</h2>
                    </ScaledText>
                    
                </div>
                <div class={style.gallery}>
                    {getBlogsListing(data, isLoading, display)}
                </div>

                <IconWrapper link="blogs" text="View Gallery" type="link" />

            </div>
        </section>

    );
};

export default Work;