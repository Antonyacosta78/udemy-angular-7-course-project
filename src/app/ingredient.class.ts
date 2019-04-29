export class Ingredient {
    constructor(public name: string, public quantity: number, public unity: string) {}

    getText() {
        return `(${this.quantity} ${this.unity}) ${this.name}`;
    }
}