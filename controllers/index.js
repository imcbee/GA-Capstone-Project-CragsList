require('../config/db.connection');

module.exports = {
    journalController: require('./journal_controller'),
    commentsController: require('./comments_controller'),
}