export class Race {

    constructor(name: string, bonusValue: number, bonusCarac: string) {
        this.name = name;
        this.bonusValue = bonusValue;
        this.bonusCarac = bonusCarac;
    }

    id: number;
    name: string;
    bonusValue: number;
    bonusCarac: string;
}
