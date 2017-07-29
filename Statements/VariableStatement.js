var VariableBlock = (function () {
    function VariableBlock() {
    }
    VariableBlock.prototype.construtor = function (name1) {
        name1 = "Jigna";
    };
    VariableBlock.prototype.Method1 = function () {
        var name1 = Object;
        var name2 = 123;
        console.log(name1);
        console.log(name2);
        var customDays;
        (function (customDays) {
            customDays[customDays["a"] = 0] = "a";
            customDays[customDays["b"] = 1] = "b";
            customDays[customDays["c"] = 2] = "c";
        })(customDays || (customDays = {}));
        ;
    };
    return VariableBlock;
}());
var obj = new VariableBlock();
obj.Method1();
//# sourceMappingURL=VariableStatement.js.map