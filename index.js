var compose = require("@hacss/compose-plugins");
var copy = require("@hacss/plugin-copy");
var del = require("@hacss/plugin-delete");

module.exports = function(spec) {
  return compose(
    del(Object.keys(spec)),
    copy(spec),
  );
};
