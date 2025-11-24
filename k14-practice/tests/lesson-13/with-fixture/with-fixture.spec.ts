import { test } from "../../../src/fixtures/merge-test";

test.beforeEach(async () => {
    console.log("Before each: Login");
});

test.afterEach(async () => {
    console.log("After each: Clean up data");
});

test("With fixture", async ({ dashboard }) => {
    console.log("Steps trong TC")
});

test("API with fixture", async ({ authRequest }) => {
    console.log("Steps trong TC")

})