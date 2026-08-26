import { test, expect } from "@playwright/test";

    // test.describe.configure({mode: 'parallel'});
    // test.describe.configure({mode: 'parallel'});

test.describe("Group1", async () => {
    test("Test1", async () => {
        console.log("This is Test1");
    })
    test("Test2", async () => {
        console.log("This is Test2");
    })
    test("Test3", async () => {
        console.log("This is Test3");
    })
    test("Test4", async () => {
        console.log("This is Test4");
    })
    test("Test5", async () => {
    console.log("This is Test5");
    })
})
