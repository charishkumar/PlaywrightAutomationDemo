# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06/03_POST_API_Request_UsingFaker_Test.spec.ts >> POST API Request Test using Faker plugin in Playwright
- Location: tests/Chapter06/03_POST_API_Request_UsingFaker_Test.spec.ts:11:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "alveus"
Received: undefined
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { formatAPIRequest } from '../../src/utils/APIHelpers';
  3  | import fs from 'fs';            // we need to import fs module to read the json file which is storing the post request body. We are using fs.readFileSync() method to read the file synchronously.
  4  | import path from 'path';        //we are importing path module to get the absolute path of the json file which is storing the post request body.
  5  | import {faker} from '@faker-js/faker'; //we are importing faker module to generate random data for the post request body.
  6  | 
  7  | test.use({
  8  |     baseURL:process.env.BASE_API_URL,
  9  | })
  10 | 
  11 | test('POST API Request Test using Faker plugin in Playwright', async ({ request }) => {
  12 | 
  13 |     //assigning the path of the json file to a variable filePath. We are using path.join() method to join the directory name and the file name to get the absolute path of the file.
  14 |     const filePath = path.join(__dirname, '../../test-data/api_requests/Dynamic_POST_API_Request.json');
  15 |     //reading the json file and assigning it to a variable template. We are using fs.readFileSync() method to read the file synchronously. utf-8 is the encoding format which we are using to read the file. We are using utf-8 encoding format because the json file is in utf-8 format.
  16 |     const template = fs.readFileSync(filePath, 'utf-8');
  17 |     //generating random data using faker and assigning it to a variable values. We are using faker.name.firstName(), faker.name.lastName(), faker.number.int({min: 1000, max: 5000}), and faker.lorem.word() methods to generate random data.
  18 |     
  19 |     const firstName = faker.person.firstName(); //generating random first name using faker.person.firstName() method.
  20 |     const lastName = faker.person.lastName(); //generating random last name using faker.person.lastName() method.
  21 |     const totalPrice = faker.number.int({min: 1000, max: 5000}); //generating random total price using faker.number.int({min: 1000, max: 5000}) method.
  22 |     const additionalNeeds = faker.lorem.word(); //generating random additional needs using faker.lorem.word() method.
  23 |     
  24 |     const values = [firstName, lastName, totalPrice, additionalNeeds]; //array of values to replace the placeholders in the template.
  25 |     //calling the function formatAPIRequest() to replace the placeholders in the template with the values from the array. We are passing the template and the values array as arguments to the function. The function will return json file data in string format after replacing the values. We are storing that data in postAPIRequest variable.
  26 |     const postAPIRequest = await formatAPIRequest(template, values);
  27 | 
  28 | //Using request context, we are calling post method to send a post request to the endpoint. 
  29 | // We need to send the end point (/booking) that gets appended to baseURL and the data after replacing placeholders. Since the postAPIRequest is in String format, we are using JSON.parse() method to convert the string to JSON object before sending it to post request.
  30 |     const postAPIResponse =await request.post(`/booking`, {data: JSON.parse(postAPIRequest)});
  31 |     
  32 |     //we are assigning the response to a variable postAPIResponse and then we are converting the response to JSON format and assigning it to a variable postAPIResponseBody.
  33 |     const jsonPOSTAPIResponseBody = await postAPIResponse.json();
  34 |     //By using JSON.stringify(jsonPOSTAPIResponseBody) we are converting the JSON object to a string and then we are logging it to the console.
  35 |     //we are passing null and 2 as the second and third arguments to JSON.stringify() method to format the JSON object with 2 spaces indentation.
  36 |     //passing null to not to update jsonPOSTAPIRespoonseBody.
  37 | 
  38 |     //Print JSON API Responses.
  39 |     console.log(`POST API Response Body : ${JSON.stringify(jsonPOSTAPIResponseBody, null, 2)}`);  
  40 | 
  41 |     console.log(`Status Code: ${postAPIResponse.status()}`); //we are logging the status code of the response to the console.
  42 |     console.log(`Status Text: ${postAPIResponse.statusText()}`); //we are logging the status text of the response to the console.
  43 |     console.log(`Content Type: ${postAPIResponse.headers()['content-type']}`); //we are logging the content type of the response to the console.
  44 | 
  45 |     // Validate status code, status text and content type of the response.
  46 |     //Asserting the status code, status text and content type of the response to be 200, OK and application/json respectively.
  47 |     expect(postAPIResponse.status()).toBe(200); //we are asserting the status code of the response to be 200.
  48 |     expect(postAPIResponse.statusText()).toBe('OK'); //we are asserting the status text of the response to be OK.
  49 |     expect(postAPIResponse.headers()['content-type']).toContain('application/json'); //we are asserting the content type of the response to contain 'application/json'.
  50 | 
  51 |     //valiadate property / keys in the API Response Body.
  52 |     //using the jsonPOSTAPIResponseBody variable which is storing the response body in JSON format, we are accessing the properties / keys in the response body and asserting them to be present.
  53 |     expect(jsonPOSTAPIResponseBody).toHaveProperty('bookingid'); //we are asserting the response body to have property 'bookingid'.
  54 |     
  55 |     //validate API Response 
  56 |     //using the jsonPOSTAPIResponseBody variable which is storing the response body in JSON format, we are accessing the properties / keys in the response body and asserting them to have specific values.
  57 |     expect(jsonPOSTAPIResponseBody.bookingid).toBeGreaterThan(0); //We are asserting the response body to have value greater than 0 for the property 'bookingid'.
  58 |     expect(jsonPOSTAPIResponseBody.booking.firstname).toBe(firstName); //We are asserting the response body to have value 'Harish' for the property 'firstname'.
  59 |     expect(jsonPOSTAPIResponseBody.booking.lastname).toBe(lastName); //We are asserting the response body to have value 'Kumar' for the property 'lastname'.
  60 |     expect(jsonPOSTAPIResponseBody.booking.totalprice).toBe(totalPrice); //We are asserting the response body to have value '1000' for the property 'totalprice'.
> 61 |     expect(jsonPOSTAPIResponseBody.additionalneeds).toBe(additionalNeeds); //We are asserting the response body to have value 'breakfast' for the property 'additionalneeds'.
     |                                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  62 | })
```