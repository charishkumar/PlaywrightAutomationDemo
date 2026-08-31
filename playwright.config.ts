import { defineConfig, devices } from '@playwright/test';
// import { on } from 'node:cluster';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Read from default .env file
dotenv.config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({

  //directory of test scripts 
  testDir: './tests',

  //To change the timeout globally for all the tests (default is 30000 ms / 30 seconds) --Harish
  // timeout:60000,

  //To apply a longer wait for all expect conditions (default is 5000 ms / 5 seconds) --Harish
  // expect : {timeout:10000},

// to apply a global Timeout for all the tests execution
globalTimeout: 60 * 60* 1000,

  //using tags in automation.
  // grep: /@sanity/,                                   //specifying tags in config file
    // grep:/(?=.*@sanity)(?=.*@regression)/,               //To run both @sanity and @regression

  	// grep:/@sanity/,                                   //To run only sanity but not regression
    // grepInvert: /@regression/,

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  //retry on local machine
  // retries: 3,
  /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : 4,

  //  workers: 2,
 

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: '',

    // reporter: [['html', { open: 'on-failure'}]],

   //reporter: [['html', {open:'always', 'outputFolder':'html-report'}]], //to open the report each and every time and place in a folder html-report

  //  reporter: [['html', {open:'always'}],
  //            ['list']],

  //  reporter: [['html', {open:'always'}],
  //            ['line']],             

  //  reporter: [['html', {open:'always'}],
  //            ['dot']],

  //  reporter: [['html', {open:'always'}],
  //            ['junit', {outputFile:'junit-reports.xml'}]],

  //  reporter: [['html', {open:'on-failure'}],
  //            ['json', {outputFile:'json-test-report.json'}]], //if you want to generate json report along with html report. / specify folder name if you want to place the report in a specific folder.

// reporter:'list',

 reporter: [['html', {open:'always'}],
           ['allure-playwright']] ,

//reporter: './my-custom-reporter.ts',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    screenshot: 'on',       //capturing the screenshot whenever script is running.
    video: 'retain-on-failure',                    //this will capture the video everytime it fails.
    
    testIdAttribute: 'data-tab-item',  //this is used to locate the element by its test id.
    
    //for opening browser in maximized mode.
    // viewport: { width: 2048, height: 1120 },
    // launchOptions: {
    //   headless: false,
    //   args: ['--start-maximized']
    // },

    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
       baseURL:process.env.BASE_URL, //this is used to read the base url from the .env file. We are using this base url in the test scripts to navigate to the application under test.
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'off',
//    actionTimeout: 10000, //To apply a longer wait for all actions (default is 0 ms / unlimited) --Harish

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], 
        browserName:'chromium',
        viewport:  { width: 2048, height: 1120 },
        headless: true,
        // launchOptions:{
        //   args:['--start-maximized'],
        // },
        //fullyParallel: true,
      },
      
    },
/*
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Google Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    /* 
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
  
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

  /* Global Teardown (for running actions after tests) */
   // Reference globalTeardown script here
  //globalTeardown: './globalTeardown.ts',

});
