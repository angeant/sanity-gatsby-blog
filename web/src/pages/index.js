import React from "react";
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import '../css/normalize.css';
import '../css/webflow.css';
import '../css/voicemix-blog.webflow.css';
import MainBlogPostPreview from "../components/main-blog-post-preview";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 7
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          categories {
            title
          }
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  var postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts.edges)
    : [];
  postNodes = postNodes.filter(filterOutDocsWithoutSlugs);
  postNodes = postNodes.filter(filterOutDocsPublishedInTheFuture);
  console.log(postNodes);

  var nodes = postNodes.slice(1);

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout props={{ 'post': false }}>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <div class="titlesection">
        <div class="w-container">
          <div class="titleblock">Es momento de alzar la voz por lo que vale la pena para ti.</div>
        </div>
      </div>
      <MainBlogPostPreview key={0} nodes={postNodes} isInList />
      <Container>
        {nodes && (
          <BlogPostPreviewList
            title="Latest blog posts"
            nodes={nodes}
            browseMoreHref="/archive/"
          />
        )}
      </Container>
    </Layout>
  );
};

export default IndexPage;
