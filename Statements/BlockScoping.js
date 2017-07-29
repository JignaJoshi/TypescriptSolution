var x = "sight";
function foo(flag) {
    var a = 100;
    if (flag) {
        var b = a + 1;
        return b;
    }
    return a;
}
function foo2() {
    console.log(x);
}
function foo3() {
    console.log(x);
    var x;
}
var zz = "new zzz";
function foo4() {
    console.log(zz);
    //let zz;
}
var myFunction = foo(true);
console.log(myFunction);
foo2();
foo3();
foo4();
//# sourceMappingURL=BlockScoping.js.map