import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";
import '../css/addition.css';

import { responsiveTitle3 } from "./typography.module.css";

function BlogPostPreview(props) {
  return (
    <Link
      className={cn(props.isInList ? styles.inList : styles.inGrid, "gridelementblock")}
      style={{textDecoration: 'none'}}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div class="gridelementimage">
        {props.mainImage && props.mainImage.asset && (
          <img
            class="image"
            src={imageUrlFor(buildImageObj(props.mainImage))}
            loading="lazy" 
            width="677" 
            sizes="(max-width: 767px) 100vw, 677px"
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div class="gridelementdatablock">
        <div class="aligntopblock">
          <div class="categoryblock">{props.categories[0].title}</div>
          <h3 style={{lineHeight: '20px', margin: '0px'}} class="gridposttitleblock txt">{props.title}</h3>
          {props._rawExcerpt && (
             <div style={{marginTop: '5px'}} className="mainpostcontentblock">
              {props._rawExcerpt[0].children[0].text}
            </div>
          )}
        </div>
        <div  class="posttimestampblock" >
          {format(new Date(props.publishedAt), "dd/MM/yy")}
        </div>
      </div>
    </Link>
  );
}

export default BlogPostPreview;
