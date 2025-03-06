import { Aspect } from "./Aspect.ts"
import { AnyList } from "./AnyList.ts"
export class AspectList extends AnyList {
    [key: number] : Aspect;
    constructor(...aspectlist : Aspect[]) {
        super(...aspectlist);
    }

}