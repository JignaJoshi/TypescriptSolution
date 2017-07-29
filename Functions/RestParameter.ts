function RestFunction(x: number, ...y: number[]): number{
    let result = x;
    for(var i =0; i < y.length; i++)
        {
            result += y[i];
        }

        return result;
}

function SpreadFunction(...y: number[]): number{
    let result = 0;
    for(var i =0; i < y.length; i++)
        {
            result += y[i];
        }

        return result;
}


let result1 = RestFunction(2,3);
let result2 = RestFunction(2,3, 4,5);
let nums: number[] = [2,5,5];
let result3 = SpreadFunction(...nums);
