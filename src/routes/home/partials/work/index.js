import IconWrapper from "../../../../components/buttonWrapper";
import ScaledText from "../../../../components/scaledText";
import getBlogsListing from "../../../../components/getBlogs";

import style from "./style.css";


const Work = ({...props}) => {
    const { data, isLoading, display } = props;

    return (
       
            <section class={style.latestWork}>
                <div class={style.container}>
            <div class={style.latestWorkHeader}>
                <ScaledText children={<h1>Latest <span>Work</span></h1>} maxFontSize={36} maxContainerWidth={900} minFontSize={16} />
            </div>
            <div class={style.gallery}>
                {getBlogsListing(data, isLoading, display)}
            </div>

            <IconWrapper children={<i class="fa-solid fa-camera"></i>} link="/blogs" text="View Gallery" type="link" />
            </div>
            </section>
 
    );
};

export default Work;