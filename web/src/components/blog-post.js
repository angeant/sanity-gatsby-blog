import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Container from "./container";
import PortableText from "./portableText";
import logotipo from "../images/logoVMX.png";
import ligthening from "../images/rayi_1rayi.png";
import instagram from "../images/ig.png";
import twitter from "../images/tw.png";
import linkedin from "../images/ld.png"
import React from "react";

import BlogPostPreviewList from "../components/blog-post-preview-list";
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
  } = props[0];



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
      <div class="openpostcontentsection">
        <div class="w-container">
          <div class="contentspacingblock">
            <div class="subcontainer">
              {_rawBody && <PortableText blocks={_rawBody} />}
            </div>
            <aside style={{padding: '10px'}} className={styles.metaContent}>
              {authors && <AuthorList items={authors} title="Autores" />}
            </aside>
          </div>
        </div>
      </div>
      <div class="promosection">
        <div class="container-3 w-container">
          <div class="div-block-2">
            <div class="promotitle">¿Aún no tienes una voz activa en Voicemix?</div>
            <div class="text-block-21">Descubre los beneficios de ser parte de lo que es valioso para ti.</div>
            <div class="calltoactiobutton align">
              <div 
              onClick={() => window.location = "https://voicemix.io"}
              style={{cursor: 'pointer'}}
              class="calltoactionbtncntnt openapp">
                <div class="text-block-13">ENCIENDE TU VOZ</div><img src={ligthening} loading="lazy" width="10" alt="" class="image-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        {props[1] && (
          <BlogPostPreviewList
            title="Latest blog posts"
            nodes={props[1]}
            browseMoreHref="/archive/"
          />
        )}
      </Container>
      <div class="footersection">
        <div class="container-8 w-container">
          <div class="div-block-260"><img src={logotipo} loading="lazy" width="140" alt="" class="image-12" />
            <div class="text-block-19">Break your silence,<br />let&#x27;s change the world</div>
          </div>
          <div class="div-block-261">
            <div class="columns-15 w-row">
              <div class="column-261215 w-col w-col-4">
                <div class="footertexttitle">Product</div>
                <div 
                onClick={() => window.location = "https://voicemix.io/about"}
                style={{cursor: 'pointer'}}
                class="footertext txt">Sobre Nosotros</div>
              </div>
              <div class="column-261216 w-col w-col-4">
                <div class="footertexttitle">Resources</div>
                <div 
                onClick={() => window.location = "https://voicemix.io/privacy"}
                style={{cursor: 'pointer'}}
                class="footertext txt">Privacidad</div>
              </div>
            </div>
          </div>
          <div class="div-block-262">
            <div class="calltoactiobutton align">
              <div 
              onClick={() => window.location = "https://voicemix.io"}
              style={{cursor: 'pointer'}}
              class="calltoactionbtncntnt openapp">
                <div class="text-block-13">CREA TU VOICEMIX</div><img src="https://uploads-ssl.webflow.com/603967333b870e7fe7c403dd/603aa9edaae3c1e76b4e95fb_rayi.png" loading="lazy" width="10" alt="" class="image-10" />
              </div>
            </div>
            <div>
              <div class="div-block-263">
                <div
                onClick={() => window.location = "https://www.instagram.com/voicemix/"}
                style={{cursor: 'pointer'}}
                class="social-icon"><img src={instagram} loading="lazy" width="28" alt="" /></div>
                <div 
                 onClick={() => window.location = "https://twitter.com/voicemix"}
                 style={{cursor: 'pointer'}}
                class="social-icon"><img src={twitter} loading="lazy" width="28" alt="" /></div>
                <div 
                onClick={() => window.location = "https://www.linkedin.com/company/voicemix/about/"}
                style={{cursor: 'pointer'}}
                class="social-icon"><img src={linkedin} loading="lazy" width="28" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
