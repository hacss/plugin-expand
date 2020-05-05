const assert = require("assert");
const expandPlugin = require("../dist/hacss-plugin-expand.umd.js");

const spec = {
  "margin-x": ["margin-left", "margin-right"],
};

const test = (actual, expected) => {
  console.log(`${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  assert.deepEqual(actual, expected);
};

const [expand, properties] = expandPlugin(spec);

test(expand({ "margin-x": "20px", "padding-top": "40px" }), {
  "margin-left": "20px",
  "margin-right": "20px",
  "padding-top": "40px",
});

test(properties, Object.keys(spec));
console.log("All tests passed.");
