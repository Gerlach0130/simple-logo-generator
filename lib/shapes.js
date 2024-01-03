class Shapes {
    constructor() {
        this.shapecolor = '';
    }
    setColor(colorVar) {
        this.shapecolor = colorVar;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.shapecolor}" />`;
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}" />`;
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.shapecolor}" />`;
    }
}



module.exports = { Circle, Triangle, Square };