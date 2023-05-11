import { test, expect } from '@playwright/test';

// ROUTES
test.describe('Validate Routes', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/');
    });
    test('Test Home Page', async ({ page }) => {
        await page.getByRole('link', { name: 'Home' }).click();
        await expect(page).toHaveTitle(/Nasa Api Explorer/);
    });
    test('Test About Route', async ({ page }) => {
        await page.getByRole('link', { name: 'About' }).click();
        await expect(page).toHaveTitle(/About/);
        await expect(page).toHaveURL(/about/);
    });

    test('Test Apod Route', async ({ page }) => {
        await page.getByRole('link', { name: 'APOD' }).click();
        await expect(page).toHaveTitle(/Astronomy Picture of the Day/);
        await expect(page).toHaveURL(/apod/);
    });

    test('Test Image Library Route', async ({ page }) => {
        await page.getByRole('link', { name: 'Image Library' }).click();
        await expect(page).toHaveTitle(/Image Library/);
        await expect(page).toHaveURL(/image-library/);
    });

    test('Test Video Library Route', async ({ page }) => {
        await page.getByRole('link', { name: 'Video Library' }).click();
        await expect(page).toHaveTitle(/Video Library/);
        await expect(page).toHaveURL(/video-library/);
    });

    test('Test Mars Rover Photos Routes', async ({ page }) => {
        await page.getByRole('link', { name: 'Mars Rover Photos' }).click();
        await expect(page).toHaveTitle(/Spirit/);
        await expect(page).toHaveURL(/mars-rover-photos\/spirit/);

        await page.getByRole('link', { name: 'curiosity' }).click();
        await expect(page).toHaveTitle(/Curiosity/);
        await expect(page).toHaveURL(/curiosity/);

        await page.getByRole('link', { name: 'spirit' }).click();
        await expect(page).toHaveTitle(/Spirit/);
        await expect(page).toHaveURL(/spirit/);

        await page.getByRole('link', { name: 'opportunity' }).click();
        await expect(page).toHaveTitle(/Opportunity/);
        await expect(page).toHaveURL(/opportunity/);
    });
});

// EXTERNAL LINKS
test.describe('Validate External Links', () => {
    test('Test Github Code Link', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Github' }).click();
        const page1 = await page1Promise;
        await expect(page1).toHaveURL(
            'https://github.com/sudo-adduser-jordan/Nasa-Api-Explorer'
        );
    });

    test('Test Portfolio Link', async ({ page }) => {});

    test('Test Github Profile Link', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: '@sudo-adduser-jordan' }).click();
        const page1 = await page1Promise;
        await expect(page1).toHaveURL('https://github.com/sudo-adduser-jordan');
    });
});
