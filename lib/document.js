const { Circle, Triangle, Square } = require('./shapes');

function createDocument(attr) {
    let svg = '';
    svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>`;
    svg += attr[2];
    const name = attr[0];
    const textcolor = attr[1];
    let shape = attr[2];
    const shapecolor = attr[3];
    
    if (shape === "Circle") {
        shape = new Circle();
        svg += `<circle cx="150" cy="115" r="80" fill="${shapecolor}" />`;
    } else if (shape === "Triangle") {
        shape = new Triangle();
        svg += `<polygon points="150, 18 244, 182 56, 182" fill="${shapecolor}" />`;
    } else {
        shape = new Square();
        svg += `<rect x="73" y="40" width="160" height="160" fill="${shapecolor}" />`;
    }

    svg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${textcolor}">${name}</text></g></svg>`;

    return svg
}

module.exports = { createDocument };