var interfaceClass = /** @class */ (function () {
    function interfaceClass() {
    }
    interfaceClass.prototype.printClass = function (msg) {
        console.log(msg);
    };
    interfaceClass.prototype.addClass = function (msg) {
        var car = ({
            marka: msg.marka,
            model: msg.model,
            sztuki: 2
        });
        console.log(car);
    };
    return interfaceClass;
}());
var example = new interfaceClass();
var car = ({
    marka: 'Volvo',
    model: 'XC90',
    sztuki: 1
});
example.printClass(car);
example.addClass(car);
