import { test, expect } from '@playwright/test';

// ROUTES
test.describe('Validate Routes', () => {
    test('Test Home Page', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'Home' }).click();
        await expect(page).toHaveTitle(/Nasa Api Explorer/);
    });
    test('Test About Page', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'About' }).click();
        await expect(page).toHaveTitle(/About/);
        await expect(page).toHaveURL(/about/);
    });

    test('Test Apod Page', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'APOD' }).click();
        await expect(page).toHaveTitle(/Astronomy Picture of the Day/);
        await expect(page).toHaveURL(/apod/);
    });

    test('Test Image Library Page', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'Image Library' }).click();
        await expect(page).toHaveTitle(/Image Library/);
        await expect(page).toHaveURL(/image-library/);
    });

    test('Test Video Library Page', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'Video Library' }).click();
        await expect(page).toHaveTitle(/Video Library/);
        await expect(page).toHaveURL(/video-library/);
    });

    test('Test Mars Rover Photos Pages', async ({ page }) => {
        await page.goto('http://localhost:3000/');
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

// METADATA
test.describe('Validate Metadata', () => {
    test('Test Home Page', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'Home' }).click();
        await expect(page).toHaveTitle(/Nasa Api Explorer/);
    });
    test('Test About Page', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'About' }).click();
        await expect(page).toHaveTitle(/About/);
        await expect(page).toHaveURL(/about/);
    });

    test('Test Apod Page', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'APOD' }).click();
        await expect(page).toHaveTitle(/Astronomy Picture of the Day/);
        await expect(page).toHaveURL(/apod/);
    });

    test('Test Image Library Page', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'Image Library' }).click();
        await expect(page).toHaveTitle(/Image Library/);
        await expect(page).toHaveURL(/image-library/);
    });

    test('Test Video Library Page', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'Video Library' }).click();
        await expect(page).toHaveTitle(/Video Library/);
        await expect(page).toHaveURL(/video-library/);
    });

    test('Test Mars Rover Photos Pages', async ({ page }) => {
        await page.goto('http://localhost:3000/');
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

// SERVER COMPONENTS
test.describe('Validate Server Components', () => {
    test('Test getSearch Component', async ({ page }) => {});

    test('Test getSearchMore Component', async ({ page }) => {});

    test('Test getImages Component', async ({ page }) => {});

    test('Test getImagesMore Component', async ({ page }) => {});

    test('Test getVideos Component', async ({ page }) => {});

    test('Test getVideosMore Component', async ({ page }) => {});

    test('Test getManifest Component', async ({ page }) => {});

    test('Test getRover Component', async ({ page }) => {});
});

// CLIENT COMPONENTS
test.describe('Validate Client Components', () => {
    // test('event should work', async ({ mount }) => {
    //     let clicked = false;

    //     // Mount a component. Returns locator pointing to the component.
    //     const component = await mount(
    //         <Button
    //             title='Submit'
    //             onClick={() => {
    //                 clicked = true;
    //             }}
    //         ></Button>
    //     );

    //     // As with any Playwright test, assert locator text.
    //     await expect(component).toContainText('Submit');

    //     // Perform locator click. This will trigger the event.
    //     await component.click();

    //     // Assert that respective events have been fired.
    //     expect(clicked).toBeTruthy();
    // });

    test('Test Search Component', async ({ page }) => {});

    test('Test Sidebar Component', async ({ page }) => {});

    test('Test Topbar Component', async ({ page }) => {});

    test('Test Marsbar Component', async ({ page }) => {});
});

// PAGES
test.describe('Validate Pages', () => {
    test('Test Apod Data', async ({ page }) => {});

    test('Test Image Library Data', async ({ page }) => {});

    test('Test Video Library Data', async ({ page }) => {});

    test('Test Mars Rover Photos Data', async ({ page }) => {});
});

// DATA
test.describe('Validate Data', () => {
    test('Test Apod Data', async ({ page }) => {});

    test('Test Image Library Data', async ({ page }) => {});

    test('Test Video Library Data', async ({ page }) => {});

    test('Test Mars Rover Photos Data', async ({ page }) => {});
});
