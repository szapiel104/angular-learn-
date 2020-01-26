interface Car {
    marka: string;
    model: string;
    sztuki: number;
    rokprodukcji?: number;
}

class interfaceClass {


    printClass(msg) {
        console.log(msg);
    }
    addClass(msg) {
        let car: Car = ({
            marka: msg.marka,
            model: msg.model,
            sztuki: 2
        });
        console.log(car);
    }


}
let example = new interfaceClass();


let car: Car = ({
    marka: 'Volvo',
    model: 'XC90',
    sztuki: 1
});


example.printClass(car);
example.addClass(car);

