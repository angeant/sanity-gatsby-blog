import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";

import { responsiveTitle3 } from "./typography.module.css";
import '../css/normalize.css';
import '../css/webflow.css';
import '../css/voicemix-blog.webflow.css';
import '../css/addition.css';

function MainBlogPostPreview(props) {
    const node = props.nodes[0];
    console.log(node);
    return (
        <div class="mainpostsection">

            <Link
                className={cn(props.isInList ? styles.inList : styles.inGrid, "container-2 w-container")}
                style={{textDecoration: 'none'}}
                to={getBlogUrl(node.publishedAt, node.slug.current)}
            >
                    {node.mainImage && node.mainImage.asset && (
                        <div class="mainpostimaeblock"><img src={imageUrlFor(buildImageObj(node.mainImage))
                            .width(600)
                            .height(Math.floor((9 / 16) * 600))
                            .auto("format")
                            .url()} loading="lazy" width="677" class="image" /></div>
                    )}

                    <div class="mainpostdatablock">
                        <div class="aligntopblock">
                            <div class="categoryblock">{node.categories[0].title}</div>
                            <div class="mainposttitleblock txt">{node.title}</div>
                            {node._rawExcerpt &&
                                <div className="mainpostcontentblock">
                                    {node._rawExcerpt[0].children[0].text} 
                                </div>
                            }
                        </div>
                        <div class="posttimestampblock">{format(new Date(node.publishedAt), "dd/MM/yy")}</div>
                    </div>
            </Link >
        </div>
    );
}

export default MainBlogPostPreview;