import app from './app';
const { config } = require('../config/index');

async function main() {
    app.listen(config.port, (err) => {
        if (err) console.error();
        else console.log(`[ Server running on port ${config.port} ]`);
    });
}

main();