let userName = process.env.userName;
let password = process.env.password;
let dbUrl = process.env.dbUrl;
module.exports = {
  getdbConnectionString: function() {
    return `mongodb://${userName}:${password}@${dbUrl}`;
    // return 'mongodb://localhost:27017/todos'
  },
  seedDB: process.env.seed || false
};
