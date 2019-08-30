import { Race } from './race';
import { Arme } from './arme';
import { Classe } from './classe';
import { RaceService } from '../services/race.service';
import { ClasseService } from '../services/classe.service';
import { ArmeService } from '../services/arme.service';

export class Personnage {

    id: number;
    name: string;
    hp: number;
    hpMax: number;
    force: number;
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

    constructor(
        name: string,
        force: number,
        int: number,
        dex: number,
        sag: number,
        cha: number,
        con: number,
        race: Race,
        arme: Arme,
        classe: Classe,
    ) {
        this.name = name;
        this.force = force;
        this.int = int;
        this.dex = dex;
        this.sag = sag;
        this.cha = cha;
        this.con = con;
        this.hpMax = con * 2;
        this.hp = con * 2;
        this.dodge = dex + sag;
        this.resistance = con + force;
        this.volition = int + sag;
        this.race = race;
        this.classe = classe;
        this.arme = arme;
    }
}
