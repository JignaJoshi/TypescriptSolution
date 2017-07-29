// let addFunction = (x: number, y: number) =>{
//     var result = x+ y;
//     console.log(result);
// }
// let result = addFunction(2,5);
var Messanger = (function () {
    function Messanger() {
        this.message = "Hello Jigna";
        this.country = "India";
    }
    Messanger.prototype.greetArrow = function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.message); }, 2000);
        this.country = "R";
    };
    Messanger.prototype.greetAnnonymous = function () {
        setTimeout(function () {
            console.log(this.message);
        }, 3000);
    };
    return Messanger;
}());
var me = new Messanger();
me.greetArrow();
me.greetAnnonymous();
//# sourceMappingURL=Arrow.js.map