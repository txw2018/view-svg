#! /usr/bin/env node
const argv = require("minimist")(process.argv.slice(2));

const filePath = argv.path || "./src/svg";
const port = argv.port || 4000;
require("../src/serve.js").createServe(filePath, port);
