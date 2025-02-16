import { assertEquals } from "jsr:@std/assert";
import { Aspect } from "../../Model/Aspect.ts"
import { AspectList } from "../../Model/AspectList.ts"

Deno.test(function constructorTest() {
    const AspectObject = new Aspect ("Test", "Test", "Test");

    assertEquals(true, AspectObject instanceof Aspect);

    const AspectListObject = new AspectList(AspectObject);

    assertEquals(true, AspectListObject instanceof AspectList);

    assertEquals("Test", AspectListObject[0].getDescription());
    assertEquals(1, AspectListObject.counter);

    const AspectListObject2 = new AspectList(AspectObject, AspectObject, AspectObject);
    assertEquals (3, AspectListObject2.counter)
});