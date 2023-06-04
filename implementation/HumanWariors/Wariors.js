"use strict";
exports.__esModule = true;
var Wariorses = /** @class */ (function () {
    function Wariorses(name, demege, weight, length, status, defance) {
        this.name = name;
        this.demeges = demege;
        this.weights = weight;
        this.lengths = length;
        this.statuss = status;
        this.defances = defance;
    }
    Wariorses.prototype.Attack = function (action) {
        console.log("".concat(this.name, " atack"));
    };
    Wariorses.prototype.protection = function (action) {
        console.log("".concat(this.name, " atack"));
    };
    Wariorses.prototype.Retreat = function (action) {
        console.log("".concat(this.name, " atack"));
    };
    Wariorses.prototype.MoveOn = function (action) {
        console.log("".concat(this.name, " \u0412 \u0431\u043E\u0439"));
    };
    Wariorses.prototype.MoveOns = function () {
        console.log("".concat(this.name).concat(this.demeges).concat(this.weights).concat(this.lengths).concat(this.statuss).concat(this.defances, "  \u0412 \u0431\u043E\u0439"));
    };
    return Wariorses;
}());
exports["default"] = Wariorses;
