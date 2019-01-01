let userName = process.env.uname;
let pwd = process.env.password;
let dbUrl = process.env.dburl;
module.exports = {


    getdbConnectionString: function(){
        // return `mongodb://${userName}:${pwd}@${dbUrl}`
        return 'mongodb://localhost:27017'
    },
    seedDB: process.env.seed||false
}