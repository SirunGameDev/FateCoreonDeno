import { assertEquals } from "jsr:@std/assert";
import { Character } from "../../Model/Character.ts"

Deno.test(function constructorTest() {
    const CharacterObject = new Character ();

    assertEquals(true, CharacterObject instanceof Character);
});