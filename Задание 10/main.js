class DivisibleNumbersPrinter {

    i;
    pDivisibleNumbers;
    printDivisibleNumbers() {
        this.i = [];
        for (let i = 0; i <= 100; i++) {
            if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
                this.i.push(i);
            }
        }
        return this.i;
    }

    print() {
        this.pDivisibleNumbers = this.printDivisibleNumbers();
        console.log(this.pDivisibleNumbers);
    }
   

}

const printer = new DivisibleNumbersPrinter();
printer.print();
    