module.exports = ({ env }) => ({
  // ...
  io: {
    enabled: true,
    config: {
      // This will listen for all supported events on the article content type
      contentTypes: ["api::blog-post.blog-post", "api:comment.comment"],
    },
  },
  // ...
});
