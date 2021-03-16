export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605111e486e5ed0095558ff2",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-dtqvqwfv",
                  apiId: "2b0c5f6d-9eca-4beb-8efa-8c57ceedc8e4",
                },
                {
                  buildHookId: "605111e4624b2900952a555e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-3z86aag3",
                  apiId: "bd8a940d-12db-40bc-a5f6-53b23b2ae8c8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/angeant/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-3z86aag3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
