import { Stress } from "./Stress.ts";
import { Aspect } from "./Aspect.ts";

export class Consequence {
    Stress? : Stress;
    Aspect? : Aspect;

    constructor (StressObj : Stress = new Stress(0)) {
        this.Stress = StressObj;
    }
}