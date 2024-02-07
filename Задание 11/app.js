class ReshatelKvadratnogoUravnenia {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    reshat() {
        const discriminant = this.b**2 - 4 * this.a * this.c;
        if (discriminant > 0) {
            const pravilo1 = (-this.b + Math.sqrt(discriminant)) / (2 * this.a);
            const pravilo2 = (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
            return [pravilo1, pravilo2];
        } else if (discriminant === 0) {
            const pravilo = -this.b / (2 * this.a);
            return pravilo;
        } else {
            return null;
        }
    }

    print() {
        const pravila = this.reshat();
        if (pravila !== null) {
            if (Array.isArray(pravila)) {
                console.log("Корни квадратного уравнения:");
                console.log("x1 =", pravila[0]);
                console.log("x2 =", pravila[1]);
            }else {
                console.log("Корень квадратного уравнения:", pravila);
            } 
        } else {
            console.log("Уравнение не имеет действительных корней");
        }
    }
}

const a = parseFloat(prompt("Введите коэффициент a: "));
const b = parseFloat(prompt("Введите коэффициент b: "));
const c = parseFloat(prompt("Введите коэффициент c: "));
const reshatelUravnenia = new ReshatelKvadratnogoUravnenia(a, b, c);
reshatelUravnenia.print();



            