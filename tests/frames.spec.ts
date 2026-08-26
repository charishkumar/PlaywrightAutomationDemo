import { test, expect, Locator, Page } from "@playwright/test";

test("Iframes Demo", async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    //1. count the total number of frames within the page.

    const frames = page.frames();                   //page.frames() method returns an array of frames.
    console.log("Number of Frames: ", frames.length);

    //2. How to interact with the element within the frame.
    //approach-1 : using page.frame() itself.

    const frame = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1.html" });


    if (frame) {
        //await frame.locator("input[name='mytext1']").fill("Hello");
        await frame.fill("input[name='mytext1']", "Hello");
    }
    else {
        console.log("Frame is not available.");
    }

    //approach 2 by using frame locator.

    await page.frameLocator("[src='frame_1.html']").locator("input[name='mytext1']").fill("HelloWorld")

    await page.waitForTimeout(5000);

})


test("Inner Iframes / Child Frames Demo", async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame2 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });

    //using ? (optional) operator in order to defy the possible return of null from frame.locator() method.
    //    await frame2?.locator("input[name='mytext3']").fill("Harisha");

    if (frame2) {
        await frame2?.locator("input[name='mytext3']").fill("Harisha");
        //to find the number of child frames inside the frames.

        const chFrames = frame2.childFrames();
        console.log("Number of child Frame 3: ", chFrames.length);
        await page.waitForTimeout(5000);
        const radioBtn = chFrames[0].getByLabel("I am a Human");
        // await radioBtn.check();
        // await expect(radioBtn).toBeChecked();

        await radioBtn.click();
        await expect(radioBtn).toHaveAttribute('aria-checked', 'true');

    }
    else {
        console.log("No such Iframe.")
    }
    await page.waitForTimeout(5000);
})