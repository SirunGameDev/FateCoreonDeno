import { assertEquals } from "jsr:@std/assert";
import { Skill } from "../../Model/Extra.ts"

Deno.test(function constructorTest() {
    const SkillObject = new Skill ();

    assertEquals(true, SkillObject instanceof Skill);
});