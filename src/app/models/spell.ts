import { Classe } from './classe';

export class Spell {

    constructor(name: string, description: string, classe: Classe) {
        this.name = name;
        this.description = description;
        this.classe = classe;
    }

    id: number;
    name: string;
    description: string;
    classe: Classe;
}
