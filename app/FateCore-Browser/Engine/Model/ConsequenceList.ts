import {Consequence} from "./Consequence.ts"
import { AnyList } from "./AnyList.ts"
export class ConsequenceList extends AnyList {
    [key: number] : Consequence;
}