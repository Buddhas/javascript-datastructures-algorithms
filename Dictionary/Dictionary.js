class Dictionary {
  constructor() {
    this.items = {};
  }
  get(key) {
    return this.has(key) ? this.items[key] : undefined;
  }
  set(key, value) {
    this.items[key] = value;
  }
  has(key) {
    return key in this.items;
  }
}

module.exports = Dictionary;
