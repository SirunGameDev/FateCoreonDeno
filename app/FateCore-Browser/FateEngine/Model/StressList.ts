import { Stress } from "./Stress.ts";
import { AnyList } from "./AnyList.ts"
export class StressList extends AnyList {
    [key: number ] : Stress;
}