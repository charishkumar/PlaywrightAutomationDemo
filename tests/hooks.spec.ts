import { test, expect } from "@playwright/test";

test.beforeAll('BeforeAll', async ()=> {
    console.log("This is Before all ...")
})

test.afterAll('AfterAll', async ()=> {
    console.log("This is After all ...")
})


test.beforeEach('Beforeeach', async ()=> {
    console.log("This is Before each ...")
})

test.afterEach('Aftereach', async ()=> {
    console.log("This is After each ...")
})

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
