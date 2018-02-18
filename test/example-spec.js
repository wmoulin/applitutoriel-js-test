"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_utils_1 = require("hornet-js-test/src/test-utils");
var expect = test_utils_1.TestUtils.chai.expect;
var example_1 = require("./example");
describe("Test JS", function () {
    it("doit passer", function () {
        expect(example_1.Hello.sayHello("world")).to.be.equal("Hello, world");
    });
});

//# sourceMappingURL=example-spec.js.map
