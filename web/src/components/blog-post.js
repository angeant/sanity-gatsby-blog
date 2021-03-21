import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Container from "./container";
import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

function BlogPost(props) {
  const {
    _rawBody,
    authors,
    categories,
    title,
    mainImage,
    publishedAt,
  } = props;
  console.log(props);
  return (
    <article>
      <div class="openposttitlesection">
        <div class="w-container">
          <div class="titlespacingblock">
            <div class="subcontainer">
              <div class="categoryblock">
                {categories.map((category) => (
                  <div key={category._id}>{category.title}</div>
                ))}
              </div>
              <div class="mainposttitleblock">{title}</div>
              <div class="posttimestampblock">{differenceInDays(new Date(publishedAt), new Date()) > 3
                ? formatDistance(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), "dd/MM/yy")}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="openpostimagesection">
        <div class="w-container">
          {mainImage && mainImage.asset &&
            <div class="openpostimagecontainer"><img src={imageUrlFor(buildImageObj(mainImage))} width="743" sizes="(maxWidth: 479px) 100vw, (maxWidth: 767px) 87vw, (maxWidth: 991px) 86vw, 850px"
              alt={mainImage.alt} loading="lazy" class="image-2" /></div>
          }
        </div>
      </div>
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            {authors && <AuthorList items={authors} title="Autores" />}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default BlogPost;
