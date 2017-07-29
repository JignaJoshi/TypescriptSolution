function doReverse<T> (list: T[]) : T[]{
    let revList: T[] = [];
    for(let i = (list.length - 1); i >= 0; i--){
        revList.push(list[i]);
    }
    return revList;
}

let letters = ['a', 'b', 'c', 'd', 'e'];
let reversedLetters = doReverse<string>(letters);
console.log(reversedLetters);