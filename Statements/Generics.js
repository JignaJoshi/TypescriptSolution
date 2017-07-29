function doReverse(list) {
    var revList = [];
    for (var i = (list.length - 1); i >= 0; i--) {
        revList.push(list[i]);
    }
    return revList;
}
var letters = ['a', 'b', 'c', 'd', 'e'];
var reversedLetters = doReverse(letters);
console.log(reversedLetters);
//# sourceMappingURL=Generics.js.map