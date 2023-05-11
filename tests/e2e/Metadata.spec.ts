import { test, expect } from '@playwright/test';

// METADATA
test.describe('Validate Metadata', () => {
    test('Test Home Page Metadata', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await expect(page).toHaveTitle(/Nasa Api Explorer/);
    });
    test('Test About Page Metadata', async ({ page }) => {
        await page.goto('http://localhost:3000/about');
        await expect(page).toHaveTitle(/About/);
        await expect(page).toHaveURL(/about/);
    });

    test('Test Apod Page Metadata', async ({ page }) => {
        await page.goto('http://localhost:3000/apod');
        await expect(page).toHaveTitle(/Astronomy Picture of the Day/);
        await expect(page).toHaveURL(/apod/);
    });

    test('Test Image Library Page', async ({ page }) => {
        await page.goto('http://localhost:3000/image-library');
        await expect(page).toHaveTitle(/Image Library/);
        await expect(page).toHaveURL(/image-library/);
    });

    test('Test Video Library Page Metadata', async ({ page }) => {
        await page.goto('http://localhost:3000/video-library');
        await expect(page).toHaveTitle(/Video Library/);
        await expect(page).toHaveURL(/video-library/);
    });

    test('Test Mars Rover Photos Pages Metadata', async ({ page }) => {
        // await page.goto('http://localhost:3000/mars-rover-photos');
        // await expect(page).toHaveTitle('Mars Rover Photos');
        // await expect(page).toHaveURL(/mars-rover-photos/);

        await page.goto('http://localhost:3000/mars-rover-photos/curiosity');
        await expect(page).toHaveTitle(/Curiosity/);
        await expect(page).toHaveURL(/curiosity/);

        await page.goto('http://localhost:3000/mars-rover-photos/spirit');
        await expect(page).toHaveTitle(/Spirit/);
        await expect(page).toHaveURL(/spirit/);

        await page.goto('http://localhost:3000/mars-rover-photos/opportunity');
        await expect(page).toHaveTitle(/Opportunity/);
        await expect(page).toHaveURL(/opportunity/);
    });
});
