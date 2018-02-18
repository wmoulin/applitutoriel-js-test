"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require('assert');
var React = require("react");
var ReactDom = require("react-dom");
var ReactTestUtils = require('react-dom/test-utils'); // ES5 with npm
var button_1 = require("hornet-js-react-components/src/widget/button/button");
var chai = require('chai');
describe("Test Karma", function () {
    it("Test KO", function () {
        assert.equal(1, 2);
    });
    it("Test OK", function () {
        assert.equal(1, 1);
    });
    it("Test React", function () {
        var button = ReactTestUtils.renderIntoDocument(React.createElement(button_1.Button, null));
        chai.expect(button).to.be.ok;
        var div = document.createElement('div');
        document.body.appendChild(div);
        ReactDom.render(React.createElement(button_1.Button, null), div);
    });
});

//# sourceMappingURL=test.karma.js.map
