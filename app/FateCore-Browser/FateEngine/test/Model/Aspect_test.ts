import { assertEquals } from "jsr:@std/assert";
import { Aspect } from "../../Model/Aspect.ts"

Deno.test(function constructorTest() {
    const AspectObject = new Aspect ("Test", "Test", "Test");

    assertEquals(true, AspectObject instanceof Aspect);
});