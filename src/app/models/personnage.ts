import { Race } from './race';
import { Arme } from './arme';
import { Classe } from './classe';

export class Personnage {

    constructor() {

    }

    id: number;
    name: string;
    hp: number;
    hpMax: number;
    for: number;
    int: number;
    dex: number;
    sag: number;
    cha: number;
    con: number;
    dodge: number;
    resistance: number;
    volition: number;
    race: Race;
    arme: Arme;
    classe: Classe;
}
