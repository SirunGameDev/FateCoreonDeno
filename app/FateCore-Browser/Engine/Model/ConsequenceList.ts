import {Aspect} from "./Aspect.ts"
import { AnyList } from "./AnyList.ts"
export class ConsequenceList extends AnyList {
    [key: number] : Aspect;
}