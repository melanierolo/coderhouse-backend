// Importing the path module
const path = require('path');

// Getting the current file's path
const currentFilePath = __filename;

// Getting the current directory's path
const currentDirPath = path.dirname(currentFilePath);

// Exporting the current directory's path for use in other files
module.exports = { currentDirPath };
