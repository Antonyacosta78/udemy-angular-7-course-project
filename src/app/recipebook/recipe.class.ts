export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }

    getShortDesc(charLimit: number){
        return this.description.length > charLimit ? this.description.substr(0,charLimit) + "..." : this.description;
    }

}
