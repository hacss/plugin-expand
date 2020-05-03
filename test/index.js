const { expect } = require("chai");
const expandPlugin = require("../index.js");

describe("expand plugin", () => {
  const spec = {
    "margin-x": ["margin-left", "margin-right"],
  };

  const [ expand, properties ] = expandPlugin(spec);

  it("should expand specified properties", () => {
    expect(expand({ "margin-x": "20px", "padding-top": "40px" }))
      .to.deep.equal({
        "margin-left": "20px",
        "margin-right": "20px",
        "padding-top": "40px",
      });
  });

  it("should add the properties in the spec to the list of recognized properties", () => {
    expect(properties).to.deep.equal(Object.keys(spec));
  });
});
