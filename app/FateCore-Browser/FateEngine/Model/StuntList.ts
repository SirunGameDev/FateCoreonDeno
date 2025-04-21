import {Stunt} from "./Stunt.ts"
import { AnyList } from "./AnyList.ts"
export class StuntList extends AnyList{
    [key: number] : Stunt;
}