const fs = require ('fs');
const path = require ('path');

const {exec} = require ('child_process');

function createDirectory (dirName, componentName) {
  if (!fs.existsSync (path.resolve (dirName))) {
    fs.mkdirSync (path.resolve (dirName));
  }
  if (!fs.existsSync (path.resolve (dirName, componentName))) {
    fs.mkdirSync (path.resolve (dirName, componentName));
  }
}

function createFiles (extensions, subDir, componentName, type) {
  let command;
  if (process.platform == 'win32') {
    command = 'echo.> ';
  } else {
    throw new Error ('Unsupported platform: ' + process.platform);
  }
  extensions.forEach (ext => {
    exec (command + path.resolve (subDir, componentName + ext), err => {});
  });
  exec (command + path.resolve (subDir, 'index.js'), err => {});
}

function createTemplates (subDir, componentName, type) {
  const componentTemplate = `import React from 'react';
    
export default function ${componentName}(props) {
    return (
        <div>${componentName} works!</div>
    )
}`;
  fs.writeFileSync (
    path.resolve (subDir, componentName + '.js'),
    componentTemplate
  );
  const templateIndex = `export default from './${componentName}.js'`;
  fs.writeFileSync (path.resolve (subDir, 'index.js'), templateIndex);
}

module.exports = {createDirectory, createFiles, createTemplates};
