import * as styles from "./blog-post-preview-list.module.css";
import BlogPostPreview from "./blog-post-preview";
import { Link } from "gatsby";
import React from "react";

function BlogPostPreviewGrid(props) {
  return (
    <div>
      <div class="postsgridsection">
        <div class="w-container">
          <div class="w-layout-grid grid">
            {props.nodes &&
              props.nodes.map((node) => (
                <BlogPostPreview key={node.id} {...node} isInList />
              ))}
          </div>
        </div>
      </div>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Explorar más</Link>
        </div>
      )}
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;
