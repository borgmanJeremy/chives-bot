/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
const config = require('./config');

module.exports = (app) => {
  app.on(['issue_comment.created'], async context => {
    const body = context.payload.comment.body.trim();
    app.log.info(context.payload.comment.body);

    config.config.forEach(item => { 
      if (item.key === body){ 
        const issueComment = context.issue({
          body: item.value,
        });
        return context.octokit.issues.createComment(issueComment);
      }
    });
  });
};
