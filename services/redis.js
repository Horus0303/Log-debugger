const redis = require("async-redis");
const client = redis.createClient();

module.exports = client