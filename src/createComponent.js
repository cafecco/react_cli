const path = require ('path');

const {createDirectory, createFiles, createTemplates} = require ('/commands');

const args = process.argv.slice (2);
const type = args[1];
const componentName = args[2];

const directoryName = type + 's';
const subDir = path.resolve (directoryName, componentName);

let extensions = ['.js', '.css', '.spec.js'];

createDirectory (directoryName, componentName);
createFiles (extensions, subDir, componentName, type);
createTemplates (subDir, componentName, type);
