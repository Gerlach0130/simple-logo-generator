const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
 
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

class APP {
    constructor() {
        this.attr = [];
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'maxlength-input',
                    name: 'name',
                    message: 'Enter logo text (Max 3 characters)',
                    maxLength: 3,
                },
                {
                    type: 'input',
                    name: 'textcolor',
                    message: 'Enter logo text color (Accepts color name or hexadecimal number)',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Choose logo shape',
                    choices: ['Circle', 'Triangle', 'Square'],
                },
                {
                    type: 'input',
                    name: 'shapecolor',
                    message: 'Enter background shape color (Accepts color name or hexadecimal number)',
                },
            ])
            .then(({ name, textcolor, shape, shapecolor }) => {
                this.attr = [ `${name}`, `${textcolor}`, `${shape}`, `${shapecolor}` ]
                console.log("Generated logo.svg");
                return writeFile(
                    join(__dirname, '..', 'examples', 'logo.svg'),
                    createDocument(this.attr)
                );
            })
            .catch((err) => {
                console.log(err);
                console.log('Error, please try again');
            }
        );
            
    };
};

module.exports = APP;