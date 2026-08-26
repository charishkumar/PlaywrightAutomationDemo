# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06/07_PUT_API_Request.spec.ts >> Create PUT API Request using Playwright
- Location: tests/Chapter06/07_PUT_API_Request.spec.ts:11:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: [Function status]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { getAPIPostRequestBody } from '../../src/utils/APIHelpers';
  3  | import { faker } from '@faker-js/faker';
  4  | import tokenAPIRequest from '../../test-data/api_requests/Token_API_Request.json'; // we need to import the static JSON file which is storing the data for the token API request. We are using this data to send a post request to the endpoint /auth to get the token for the API request. We are using this token in the header of the PUT API request to authenticate the request.
  5  | import putAPIRequest from '../../test-data/api_requests/PUT_API_Request.json'; // we need to import PUT API Request.json file
  6  | 
  7  | test.use({
  8  |     baseURL: process.env.BASE_API_URL,
  9  | })
  10 | 
  11 | test('Create PUT API Request using Playwright', async ({ request }) => {
  12 | 
  13 |     //generating data for the POST API request body using faker.js library. We are generating random data for the properties of the request body.
  14 |     const firstName = faker.person.firstName(); //generating random first name using faker.person.firstName() method.
  15 |     const lastName = faker.person.lastName(); //generating random last name using faker.person.lastName() method.
  16 |     const totalPrice = faker.number.int({ min: 1000, max: 5000 }); //generating random total price using faker.number.int({min: 1000, max: 5000}) method.
  17 |     const additionalNeeds = faker.lorem.word(); //generating random additional needs using faker.lorem.word() method.
  18 |     const depositpaid = faker.datatype.boolean(); //generating random boolean value using faker.datatype.boolean() method.
  19 |     const checkin = faker.date.future().toISOString().split('T')[0]; //generating random future date using faker.date.future() method and converting it to ISO string format and splitting it to get only the date part.
  20 |     const checkout = faker.date.future().toISOString().split('T')[0]; //generating random future date using faker.date.future() method and converting it to ISO string format and splitting it to get only the date part. 
  21 | 
  22 |     //calling getAPIPostRequestBody() function to get the post request body. We are passing the generated data as arguments to the function. The function will return the post request body in JSON format.
  23 |     const postRequestBody = await getAPIPostRequestBody(firstName, lastName, totalPrice, depositpaid, additionalNeeds, checkin, checkout);
  24 | 
  25 |     //create POSt API Request Test in Playwright
  26 |     //Using request context, we are calling post method to send a post request to the endpoint. 
  27 |     // We need to send the end point (/booking) that gets appended to baseURL and the data after replacing placeholders. Since the postAPIRequest is in String format, we are using JSON.parse() method to convert the string to JSON object before sending it to post request.
  28 |     const postAPIResponse = await request.post(`/booking`, { data: postRequestBody })
  29 | 
  30 |     //we are assigning the response to a variable postAPIResponse and then we are converting the response to JSON format and assigning it to a variable postAPIResponseBody.
  31 | 
  32 |     const jsonPOSTAPIResponseBody = await postAPIResponse.json();
  33 |     //By using JSON.stringify(jsonPOSTAPIResponseBody) we are converting the JSON object to a string and then we are logging it to the console.
  34 |     //we are passing null and 2 as the second and third arguments to JSON.stringify() method to format the JSON object with 2 spaces indentation.
  35 |     //passing null to not to update jsonPOSTAPIRespoonseBody.
  36 | 
  37 |     //Print JSON API Responses.
  38 |     console.log(`POST API Response Body : ${JSON.stringify(jsonPOSTAPIResponseBody, null, 2)}`);
  39 |     console.log(`Status Code: ${postAPIResponse.status()}`); //we are logging the status code of the response to the console.
  40 |     console.log(`Status Text: ${postAPIResponse.statusText()}`); //we are logging the status text of the response to the console.
  41 |     console.log(`Content Type: ${postAPIResponse.headers()['content-type']}`); //we are logging the content type of the response to the console.
  42 | 
  43 |     // Validate status code, status text and content type of the response. Asserting the status code, status text and content type of the response to be 200, OK and application/json respectively.
  44 |     expect(postAPIResponse.status()).toBe(200); //we are asserting the status code of the response to be 200.
  45 |     expect(postAPIResponse.statusText()).toBe('OK'); //we are asserting the status text of the response to be OK.
  46 |     expect(postAPIResponse.headers()['content-type']).toContain('application/json'); //we are asserting the content type of the response to contain 'application/json'.
  47 | 
  48 |     //validate API Response, using the jsonPOSTAPIResponseBody variable which is storing the response body in JSON format, we are accessing the properties / keys in the response body and asserting them to have specific values.
  49 | 
  50 |     expect(jsonPOSTAPIResponseBody.bookingid).toBeGreaterThan(0); //asserting the response body to have value greater than 0 for the property 'bookingid'.
  51 |     expect(jsonPOSTAPIResponseBody.booking.firstname).toBe(firstName); //asserting the response body to have value 'Harish' for the property 'firstname'.
  52 |     expect(jsonPOSTAPIResponseBody.booking.lastname).toBe(lastName); //asserting the response body to have value 'Kumar' for the property 'lastname'.
  53 | 
  54 |    //GET API Request Test //we are storing the bookingid from the jsonPOSTAPIResponseBody in a variable bookingID. We will use this bookingID to send a get request to the endpoint /booking/{bookingID} to get the details of the booking.
  55 |     const bookingID = jsonPOSTAPIResponseBody.bookingid;
  56 |     console.log(`Booking ID: ${bookingID}`); //we are logging the bookingID to the console.
  57 |     //we are sending a get request to the endpoint /booking/{bookingID} to get the details of the booking. We are using template literals to pass the bookingID in the endpoint.
  58 |     const getAPIResponse = await request.get(`/booking/${bookingID}`);
  59 | 
  60 |     //validate status code, status text and content type of the response.
  61 |     expect(getAPIResponse.status()).toBe(200); //we are asserting the status code of the response to be 200.
  62 |     expect(getAPIResponse.statusText()).toBe('OK'); //we are asserting the status text of the response to be OK.
  63 | 
  64 |     //we are converting the response to JSON format and assigning it to a variable getAPIResponseBody.
  65 |     const getAPIJSONResponseBody = await getAPIResponse.json();
  66 | 
  67 |     //Print JSON API Responses.
  68 |     //By using JSON.stringify(getAPIJSONResponseBody) we are converting the JSON object to a string and then we are logging it to the console. we are passing null and 2 as the second and third arguments to JSON.stringify() method to format the JSON object with 2 spaces indentation. passing null to not to update getAPIJSONResponseBody.
  69 | 
  70 |     console.log(`GET API Response Body : ${JSON.stringify(getAPIJSONResponseBody, null, 2)}`);
  71 | 
  72 |     //posting request to get the token for the API request. We are using this token in the header of the PUT API request to authenticate the request.
  73 | 
  74 |     const tokenAPIResponse = await request.post(`/auth`, {data: tokenAPIRequest});
  75 |     const tokenAPIResponsebody = await tokenAPIResponse.json();
  76 | 
  77 |     //validate Token API Status and StatusText
  78 |     expect (tokenAPIResponse.status()).toBe(200);
  79 |     expect(tokenAPIResponse.statusText()).toBe('OK');
  80 | 
  81 |     const token = tokenAPIResponsebody.token;
  82 |     console.log("Token: " + token );
  83 | 
  84 |     //update booking
  85 | 
  86 |    const putResponse = await request.put(`/booking`, {data: putAPIRequest});
  87 |    console.log(putResponse.text())
  88 |    
  89 |    //const putResponseBody = await putResponse.json();
  90 | 
> 91 |     expect (putResponse.status).toBe(200);
     |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  92 |     expect (putResponse.statusText).toBe('OK');
  93 | 
  94 |    //console.log(`PUT API Response Body : ${JSON.stringify(putResponseBody, null, 2)}`);
  95 | 
  96 | 
  97 | })
```