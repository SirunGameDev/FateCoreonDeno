import { assertEquals } from "jsr:@std/assert";
import { Extra } from "../../Model/Extra.ts"

Deno.test(function constructorTest() {
    const ExtraObject = new Extra ("Test");

    assertEquals(true, ExtraObject instanceof Extra);
});