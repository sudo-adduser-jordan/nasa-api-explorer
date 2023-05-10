import { test, expect } from '@playwright/test';

// CLIENT COMPONENTS
test.describe('Validate Client Components', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/');
    });
    test.describe('Test Search Component', () => {
        test('Test Search Component', async ({ page }) => {
            await page.getByRole('link', { name: 'Image Library' }).click();
            await page.getByRole('textbox').click();
            await page.getByRole('textbox').fill('sun');
            await page.getByRole('textbox').press('Enter');
            await page.getByRole('textbox').fill('blackhole');
            await page.getByRole('textbox').press('Enter');
            await page.getByRole('textbox').fill('black hole');
            await page.getByRole('textbox').press('Enter');
            await page.getByRole('button', { name: 'Load More' }).click();
            await page.getByRole('button', { name: 'Load More' }).click();
            await page.getByRole('button', { name: 'Load More' }).click();
            await page.getByRole('textbox').click();
            await page.getByRole('textbox').fill('supernova');
            await page.getByRole('textbox').press('Enter');
            await page.getByRole('button', { name: 'Load More' }).click();
            await page.getByRole('button', { name: 'Load More' }).click();
            await page.getByRole('button', { name: 'Load More' }).click();
            await page.getByRole('link', { name: 'Video Library' }).click();
            await page.getByRole('textbox').click();
            await page.getByRole('textbox').fill('sun');
            await page.getByRole('textbox').press('Enter');
            await page.getByRole('textbox').fill('blackhole');
            await page.getByRole('textbox').press('Enter');
            await page.getByRole('textbox').fill('black hole');
            await page.getByRole('textbox').press('Enter');
            await page.getByRole('button', { name: 'Load More' }).click();
            await page.getByRole('button', { name: 'Load More' }).click();
            await page.getByRole('button', { name: 'Load More' }).click();
            await page.getByRole('textbox').click();
            await page.getByRole('textbox').fill('supernova');
            await page.getByRole('textbox').press('Enter');
            await page.getByRole('button', { name: 'Load More' }).click();
            await page.getByRole('button', { name: 'Load More' }).click();
            await page.getByRole('button', { name: 'Load More' }).click();
        });
    });

    test.describe('Test Sidebar Component', () => {
        test('Test Home Link', async ({ page }) => {
            await page.getByRole('link', { name: 'Home' }).click();
            await expect(page).toHaveTitle(/Nasa Api Explorer/);
        });
        test('Test About Link', async ({ page }) => {
            await page.getByRole('link', { name: 'About' }).click();
            await expect(page).toHaveTitle(/About/);
            await expect(page).toHaveURL(/about/);
        });

        test('Test Apod Link', async ({ page }) => {
            await page.getByRole('link', { name: 'APOD' }).click();
            await expect(page).toHaveTitle(/Astronomy Picture of the Day/);
            await expect(page).toHaveURL(/apod/);
        });

        test('Test Image Library Link', async ({ page }) => {
            await page.getByRole('link', { name: 'Image Library' }).click();
            await expect(page).toHaveTitle(/Image Library/);
            await expect(page).toHaveURL(/image-library/);
        });

        test('Test Video Library Link', async ({ page }) => {
            await page.getByRole('link', { name: 'Video Library' }).click();
            await expect(page).toHaveTitle(/Video Library/);
            await expect(page).toHaveURL(/video-library/);
        });
    });
    test.describe('Test Topbar Component', () => {
        test('Test Topbar Component', async ({ page }) => {
            await page.getByRole('link', { name: 'Video Library' }).click();
            await expect(page).toHaveTitle(/x x/);
            await expect(page).toHaveURL(/x-x/);
        });
    });
    test.describe('Test Marsbar Component', () => {
        test('Test Mars Rover Photos Link', async ({ page }) => {
            await page.getByRole('link', { name: 'Mars Rover Photos' }).click();
            await expect(page).toHaveTitle(/Spirit/);
            await expect(page).toHaveURL(/mars-rover-photos\/spirit/);
        });

        test('Test Curiosity Link', async ({ page }) => {
            await page.getByRole('link', { name: 'Mars Rover Photos' }).click();
            await page.getByRole('link', { name: 'curiosity' }).click();
            await expect(page).toHaveTitle(/Curiosity/);
            await expect(page).toHaveURL(/curiosity/);
        });
        test('Test Spirit Link', async ({ page }) => {
            await page.getByRole('link', { name: 'Mars Rover Photos' }).click();
            await page.getByRole('link', { name: 'spirit' }).click();
            await expect(page).toHaveTitle(/Spirit/);
            await expect(page).toHaveURL(/spirit/);
        });
        test('Test Opportunity Link', async ({ page }) => {
            await page.getByRole('link', { name: 'Mars Rover Photos' }).click();
            await page.getByRole('link', { name: 'opportunity' }).click();
            await expect(page).toHaveTitle(/Opportunity/);
            await expect(page).toHaveURL(/opportunity/);
        });
        test('Test Navigation Links', async ({ page }) => {
            await page.getByRole('link', { name: 'Mars Rover Photos' }).click();
            await expect(page).toHaveTitle(/Spirit/);
            await expect(page).toHaveURL(/mars-rover-photos\/spirit/);
            await page.getByRole('link', { name: 'curiosity' }).click();
            await expect(page).toHaveTitle(/Curiosity/);
            await expect(page).toHaveURL(/curiosity/);

            await page.getByRole('link', { name: 'opportunity' }).click();
            await expect(page).toHaveTitle(/Opportunity/);
            await expect(page).toHaveURL(/opportunity/);

            await page.getByRole('link', { name: 'spirit' }).click();
            await expect(page).toHaveTitle(/Spirit/);
            await expect(page).toHaveURL(/spirit/);

            await page.getByRole('link', { name: 'Mars Rover Photos' }).click();
            await expect(page).toHaveTitle(/Spirit/);
            await expect(page).toHaveURL(/mars-rover-photos\/spirit/);
            await page.getByRole('link', { name: 'curiosity' }).click();
            await expect(page).toHaveTitle(/Curiosity/);
            await expect(page).toHaveURL(/curiosity/);
            await page.getByRole('link', { name: 'opportunity' }).click();
            await expect(page).toHaveTitle(/Opportunity/);
            await expect(page).toHaveURL(/opportunity/);
            await page.getByRole('link', { name: 'spirit' }).click();
            await expect(page).toHaveTitle(/Spirit/);
            await expect(page).toHaveURL(/spirit/);
        });
    });
});
