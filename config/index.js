let username = process.env.username;
let password = process.env.password;
let dburl = process.env.dburl;
module.exports = {
  getdbConnectionString: function() {
    return `mongodb://${username}:${password}@${dburl}`;
    // return 'mongodb://localhost:27017/todos'
  },
  seedDB: process.env.seed || false
};
