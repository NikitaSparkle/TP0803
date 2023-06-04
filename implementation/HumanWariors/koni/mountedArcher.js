"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Wariors_1 = require("d:/TypeScript/5Yourk/implementation/HumanWariors/Wariors");
var MountedArcher = /** @class */ (function (_super) {
    __extends(MountedArcher, _super);
    function MountedArcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MountedArcher.prototype.Attack = function () {
    };
    MountedArcher.prototype.protection = function () {
    };
    MountedArcher.prototype.Retreat = function () {
    };
    MountedArcher.prototype.MoveOn = function () {
    };
    return MountedArcher;
}(Wariors_1["default"]));
var rabbit = new MountedArcher("Белый кролик", 10, 10, 10, 10, 10);
console.log(rabbit.protection);
