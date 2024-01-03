const { Triangle, Square, Circle } = require("../lib/shapes.js");

describe("Circle test", () => {
  test("Light blue #89cff0 circle", () => {
    const shape = new Circle();
    shape.setColor("#89cff0");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#89cff0" />'
    );
  });
});

describe("Triangle test", () => {
  test("Green triangle", () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
    );
  });
});

describe("Square test", () => {
  test("Pink square", () => {
    const shape = new Square();
    shape.setColor("pink");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="pink" />'
    );
  });
});