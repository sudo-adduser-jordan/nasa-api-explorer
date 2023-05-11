import { test, expect } from '@playwright/test';

// PAGES
test.describe('Validate Pages', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/');
    });
    test('Test Home Page', async ({ page }) => {
        await page.getByRole('link', { name: 'Home' }).click();
        await expect(page).toHaveTitle(/Nasa Api Explorer/);
        //check text / images

        await page
            .getByText(
                'This website is under construction.About this websiteThis website was created as'
            )
            .click();
        await page.getByText('This website is under construction.').click();
        await page.getByRole('heading', { name: 'About this website' }).click();
        await page
            .getByRole('heading', {
                name: 'This website was created as a hobby project to provide a front-end visiualition of the data provided by NASAs public API catalog.',
            })
            .click();
        await page.getByRole('heading', { name: 'Technical Details' }).click();
        await page
            .getByRole('heading', {
                name: 'The NASA API Explorer Website consists of a Next.js React application. It is written in Typescript and hosted by Vercel.',
            })
            .click();
        await page.getByRole('heading', { name: 'Technologies' }).click();
        await page
            .getByRole('heading', {
                name: 'Node.js React Next.js Typescript Vercel Jetbrains',
            })
            .click();
    });
    test('Test About Page', async ({ page }) => {
        await page.getByRole('link', { name: 'About' }).click();
        await page.getByText('About').nth(1).click();
        //check text / images
        await page
            .getByText(
                'AboutWhat is an Api?API stands for application programming interface, which is a'
            )
            .click();
        await page.getByRole('heading', { name: 'What is an Api?' }).click();
        await page
            .getByRole('heading', {
                name: 'API stands for application programming interface, which is a set of definitions and protocols for building and integrating application software.',
            })
            .click();
        await page
            .getByRole('heading', { name: 'Astronomy Picture of the Day' })
            .click();
        await page
            .getByRole('heading', {
                name: 'Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.',
            })
            .click();
        await page.getByRole('heading', { name: 'Image Library' }).click();
        await page
            .getByRole('heading', {
                name: 'Search NASAs official image database.',
            })
            .click();
        await page.getByRole('heading', { name: 'Video Library' }).click();
        await page
            .getByRole('heading', {
                name: 'Search NASAs official video database.',
            })
            .click();
        await page.getByRole('heading', { name: 'EPIC', exact: true }).click();
        await page
            .getByRole('heading', {
                name: 'The EPIC API provides information on the daily imagery collected by DSCOVRs Earth Polychromatic Imaging Camera (EPIC) instrument. Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits using a 2048x2048 pixel CCD (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope.',
            })
            .click();
        await page.getByRole('heading', { name: 'Mars Rover Photos' }).click();
        await page
            .getByRole('heading', {
                name: 'View the most recent image data gathered by NASAs Curiosity, Opportunity, and Spirit rovers on Mars.',
            })
            .click();
    });
    test('Test Apod Data', async ({ page }) => {
        await page.getByRole('link', { name: 'APOD' }).click();
        await page.getByText('Astronomy Picture of the Day').first().click();
        await page.locator('img').click();
        // check image
        // check test
    });

    test('Test Image Library Data', async ({ page }) => {
        //check grid
        //check button if
        //check button if not
    });

    test('Test Video Library Data', async ({ page }) => {});

    test('Test Mars Rover Photos Data', async ({ page }) => {
        await page.getByRole('link', { name: 'Mars Rover Photos' }).click();
        //check info
        //check grid
        //check button
        await page.getByRole('link', { name: 'curiosity' }).click();
        await page.getByRole('link', { name: 'opportunity' }).click();
        await page.getByRole('link', { name: 'spirit' }).click();
        await page.getByRole('link', { name: 'curiosity' }).click();
        await page.getByRole('link', { name: 'spirit' }).click();
        // await page.getByRole('button', { name: 'Load More' }).click();
    });
});
