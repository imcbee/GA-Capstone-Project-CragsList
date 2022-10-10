require("../config/db.connection");

module.exports = {
    Journal: require('./Journal'),
    Comments: require('./Comments'),
    User: require('./User')
}
