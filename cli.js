#!/usr/bin/env node

const args = process.argv.slice(2);
const action = args[0];
const type = args[1];

const help = (args.includes('-h')) || (args.includes('--help'));

if (help) {
    console.log([
        'usage: rg <action> <typeOfComponent> <name>',
        '',
        'actions:',
        '  generate, g ',
        '',
        'types of component:',
        '  component ',
        '  container ',
    ].join('\n'));
    process.exit();
}

if (action === "g" || action === "generate") {
    if (type === "component" || type === "container") {
        require("./scripts/createComponent")
    }
}
