import { assertEquals } from "jsr:@std/assert";
import { Stress } from "../../Model/Stress.ts"

Deno.test(function constructorTest() {
    const StressObject = new Stress (1);

    assertEquals(true, StressObject instanceof Stress);
});