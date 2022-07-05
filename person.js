class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `My is ${this.name}!`;
  }
}

module.exports = {
  Person,
};
