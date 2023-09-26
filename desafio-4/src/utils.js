// Importing the path module and the fileURLToPath function from the url module
const path = require('path');
const { fileURLToPath } = require('url');
// Getting the current file's path
const __filename = fileURLToPath(import.meta.url);
// Getting the current directory's path
const __dirname = path.dirname(__filename);

// Exporting the current directory's path for use in other files
module.exports = { __dirname };
