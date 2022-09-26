export default function define(obj, name) {
  return Object.defineProperty(obj, name, {
    get: function () {
      return name;
    },
  });
}
