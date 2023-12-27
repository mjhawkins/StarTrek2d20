import { D20 } from "../../common/die";
import { SimpleTable } from "../../common/table";

export enum GovernmentType {
    Anarchy, Democracy, Oligarchy, Monarchy
}

export const governmentTable: SimpleTable<GovernmentType> = () => {
    let roll = D20.roll();
    switch (roll) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return GovernmentType.Anarchy;

        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            return GovernmentType.Democracy;

        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            return GovernmentType.Oligarchy;

        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        default:
            return GovernmentType.Monarchy;
    }
}