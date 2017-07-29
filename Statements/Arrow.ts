// let addFunction = (x: number, y: number) =>{
//     var result = x+ y;
//     console.log(result);
// }

// let result = addFunction(2,5);

class Messanger{
    message: string = "Hello Jigna";
    readonly country: string = "India";
    greetArrow(): void{
        setTimeout(() => console.log(this.message), 2000);
        this.country = "R";
    }

    greetAnnonymous(): void{
        setTimeout(function(){
            console.log(this.message);
        },3000);
    }
}

let me = new Messanger();
me.greetArrow();
me.greetAnnonymous();