const createClient = require("redis");

const client = createClient();

client.connect()
    .then(() => console.log('redis connected'))
    .catch(() => console.log('error connected'));

    export default client;