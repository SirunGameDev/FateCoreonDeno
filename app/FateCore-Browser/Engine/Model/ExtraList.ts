import { Extra } from "./Extra.ts";
import { AnyList } from "./AnyList.ts";
export class ExtraList extends AnyList {
    [key: number] : Extra;
}