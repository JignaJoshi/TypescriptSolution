function add(a: number,b: number): number;
function add(a: string, b:string): string;

function add(a: any, b: any): any
{
    let result: any;
    result = a+ b;
    console.log(result);
}

let result1 = add(2,2);
let result2 = add("Jigna", "Joshi");

