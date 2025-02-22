import { assertEquals, assertInstanceOf, assertThrows } from "jsr:@std/assert";
import { Skill } from "../../Model/Skill.ts"

Deno.test(function constructorTest() {
    const SkillObject = new Skill ("Athletik", 0);

    assertInstanceOf(SkillObject, Skill);

    assertThrows(() => {const FailedObject = new Skill ("Hunger", 0)})
    assertThrows(() => {const FailedObject = new Skill ("Athletik", 10)})
    assertThrows(() => {const FailedObject = new Skill ("Athletik", -5)})

});