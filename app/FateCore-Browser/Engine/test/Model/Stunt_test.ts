import { assertEquals } from "jsr:@std/assert";
import { Stunt } from "../../Model/Stunt.ts"

Deno.test(function constructorTest() {
    const StuntObject = new Stunt ();

    assertEquals(true, StuntObject instanceof Stunt);
});