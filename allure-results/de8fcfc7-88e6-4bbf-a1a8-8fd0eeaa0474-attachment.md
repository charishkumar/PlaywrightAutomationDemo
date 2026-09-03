# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06/09_DELETE_API_Request.spec.ts >> Create DELETE API Request using Playwright
- Location: tests/Chapter06/09_DELETE_API_Request.spec.ts:12:5

# Error details

```
TypeError: request.newContext is not a function
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { getAPIPostRequestBody } from '../../src/utils/APIHelpers';
  3   | import dotenv from 'dotenv';
  4   | import { faker } from '@faker-js/faker';
  5   | import tokenAPIRequest from '../../test-data/api_requests/Token_API_Request.json'; // we need to import the static JSON file which is storing the data for the token API request. We are using this data to send a post request to the endpoint /auth to get the token for the API request. We are using this token in the header of the PATCH API request to authenticate the request.
  6   | import patchAPIRequest from '../../test-data/api_requests/PATCH_API_Request.json'; // we need to import PATCH API Request.json file
  7   | 
  8   | test.use({
  9   |     baseURL:process.env.BASE_API_URL,
  10  | })
  11  | 
  12  | test('Create DELETE API Request using Playwright', { tag: '@PlaywrightWithJenkins' }, async ({ request }) => {
  13  | 
  14  |     //generating data for the POST API request body using faker.js library. We are generating random data for the properties of the request body.
  15  |     const firstName = faker.person.firstName(); //generating random first name using faker.person.firstName() method.
  16  |     const lastName = faker.person.lastName(); //generating random last name using faker.person.lastName() method.
  17  |     const totalPrice = faker.number.int({ min: 1000, max: 5000 }); //generating random total price using faker.number.int({min: 1000, max: 5000}) method.
  18  |     const additionalNeeds = faker.lorem.word(); //generating random additional needs using faker.lorem.word() method.
  19  |     const depositpaid = faker.datatype.boolean(); //generating random boolean value using faker.datatype.boolean() method.
  20  |     const checkin = faker.date.future().toISOString().split('T')[0]; //generating random future date using faker.date.future() method and converting it to ISO string format and splitting it to get only the date part.
  21  |     const checkout = faker.date.future().toISOString().split('T')[0]; //generating random future date using faker.date.future() method and converting it to ISO string format and splitting it to get only the date part. 
  22  | 
  23  |     //calling getAPIPostRequestBody() function to get the post request body. We are passing the generated data as arguments to the function. The function will return the post request body in JSON format.
  24  | 
> 25  |     const requestContext = await request.newContext({
      |                                          ^ TypeError: request.newContext is not a function
  26  |         baseURL: process.env.base_URL
  27  |     });
  28  | 
  29  |     const postRequestBody = await getAPIPostRequestBody(firstName, lastName, totalPrice, depositpaid, additionalNeeds, checkin, checkout);
  30  | 
  31  |     //create POSt API Request Test in Playwright
  32  |     //Using request context, we are calling post method to send a post request to the endpoint. 
  33  |     // We need to send the end point (/booking) that gets appended to baseURL and the data after replacing placeholders. Since the postAPIRequest is in String format, we are using JSON.parse() method to convert the string to JSON object before sending it to post request.
  34  |     //const postAPIResponse = await request.post(`/booking`, { data: postRequestBody })
  35  |         const postAPIResponse = await requestContext.post('/booking', {
  36  |         data: postRequestBody
  37  |     });
  38  | 
  39  |     //we are assigning the response to a variable postAPIResponse and then we are converting the response to JSON format and assigning it to a variable postAPIResponseBody.
  40  | 
  41  |     const jsonPOSTAPIResponseBody = await postAPIResponse.json();
  42  |     //By using JSON.stringify(jsonPOSTAPIResponseBody) we are converting the JSON object to a string and then we are logging it to the console.
  43  |     //we are passing null and 2 as the second and third arguments to JSON.stringify() method to format the JSON object with 2 spaces indentation.
  44  |     //passing null to not to update jsonPOSTAPIRespoonseBody.
  45  | 
  46  |     //Print JSON API Responses.
  47  |     console.log(`POST API Response Body : ${JSON.stringify(jsonPOSTAPIResponseBody, null, 2)}`);
  48  | 
  49  |     // console.log(`Status Code: ${postAPIResponse.status()}`); //we are logging the status code of the response to the console.
  50  |     // console.log(`Status Text: ${postAPIResponse.statusText()}`); //we are logging the status text of the response to the console.
  51  |     // console.log(`Content Type: ${postAPIResponse.headers()['content-type']}`); //we are logging the content type of the response to the console.
  52  | 
  53  |     // Validate status code, status text and content type of the response. Asserting the status code, status text and content type of the response to be 200, OK and application/json respectively.
  54  |     expect(postAPIResponse.status()).toBe(200); //we are asserting the status code of the response to be 200.
  55  |     expect(postAPIResponse.statusText()).toBe('OK'); //we are asserting the status text of the response to be OK.
  56  |     expect(postAPIResponse.headers()['content-type']).toContain('application/json'); //we are asserting the content type of the response to contain 'application/json'.
  57  | 
  58  |     //validate API Response, using the jsonPOSTAPIResponseBody variable which is storing the response body in JSON format, we are accessing the properties / keys in the response body and asserting them to have specific values.
  59  | 
  60  |     expect(jsonPOSTAPIResponseBody.bookingid).toBeGreaterThan(0); //asserting the response body to have value greater than 0 for the property 'bookingid'.
  61  |     expect(jsonPOSTAPIResponseBody.booking.firstname).toBe(firstName); //asserting the response body to have value 'Harish' for the property 'firstname'.
  62  |     expect(jsonPOSTAPIResponseBody.booking.lastname).toBe(lastName); //asserting the response body to have value 'Kumar' for the property 'lastname'.
  63  | 
  64  |     //GET API Request Test //we are storing the bookingid from the jsonPOSTAPIResponseBody in a variable bookingID. We will use this bookingID to send a get request to the endpoint /booking/{bookingID} to get the details of the booking.
  65  |     const bookingID = jsonPOSTAPIResponseBody.bookingid;
  66  |     console.log(`Booking ID: ${bookingID}`); //we are logging the bookingID to the console.
  67  |     //we are sending a get request to the endpoint /booking/{bookingID} to get the details of the booking. We are using template literals to pass the bookingID in the endpoint.
  68  |     const getAPIResponse = await request.get(`/booking/${bookingID}`);
  69  | 
  70  |     //validate status code, status text and content type of the response.
  71  |     expect(getAPIResponse.status()).toBe(200); //we are asserting the status code of the response to be 200.
  72  |     expect(getAPIResponse.statusText()).toBe('OK'); //we are asserting the status text of the response to be OK.
  73  | 
  74  |     //we are converting the response to JSON format and assigning it to a variable getAPIResponseBody.
  75  |     const getAPIJSONResponseBody = await getAPIResponse.json();
  76  | 
  77  |     //Print JSON API Responses.
  78  |     //By using JSON.stringify(getAPIJSONResponseBody) we are converting the JSON object to a string and then we are logging it to the console. we are passing null and 2 as the second and third arguments to JSON.stringify() method to format the JSON object with 2 spaces indentation. passing null to not to update getAPIJSONResponseBody.
  79  | 
  80  |     console.log(`GET API Response Body : ${JSON.stringify(getAPIJSONResponseBody, null, 2)}`);
  81  | 
  82  |     //posting request to get the token for the API request. We are using this token in the header of the PATCH API request to authenticate the request.
  83  | 
  84  |     const tokenAPIResponse = await request.post(`/auth`, { data: tokenAPIRequest });
  85  |     const tokenAPIResponsebody = await tokenAPIResponse.json();
  86  | 
  87  |     //validate Token API Status and StatusText
  88  |     expect(tokenAPIResponse.status()).toBe(200);
  89  |     expect(tokenAPIResponse.statusText()).toBe('OK');
  90  | 
  91  |     const token = tokenAPIResponsebody.token;
  92  |     console.log("Token: " + token);
  93  | 
  94  |     //update booking
  95  |     // we are sending PATCH request to update the specified booking ID, we need to use proper endpoint, along with content-type and token along with the PATCH request.
  96  |     const patchResponse = await request.patch(`/booking/${bookingID}`, {
  97  |         headers: {
  98  |             'Content-Type': 'application/json',
  99  |             'Cookie': `token=${token}`
  100 |         },
  101 |         data: patchAPIRequest,
  102 |     });
  103 | 
  104 |     //Getting response from the PATCH Request in JSON format and storing into a variable.
  105 |     const patchResponseBody = await patchResponse.json();
  106 | 
  107 |     //validating PATCH API Response status
  108 |     expect(patchResponse.status()).toBe(200);
  109 |     expect(patchResponse.statusText()).toBe('OK');
  110 | 
  111 |     //printing the PATCH API Response body onto the console.
  112 |     console.log(`PATCH API Response Body : ${JSON.stringify(patchResponseBody, null, 2)}`);
  113 | 
  114 |     //sending DELETE Request
  115 |     const deleteResponse = request.delete(`/booking/${bookingID}`, { 
  116 |             headers:{
  117 |             'Content-Type' : 'application/json',
  118 |             'Cookie' : `token=${token}` 
  119 |         }
  120 | 
  121 |     });
  122 | 
  123 |     //Validate DELETE API Response
  124 |     expect((await deleteResponse).status()).toBe(201)
  125 |     expect((await deleteResponse).statusText()).toBe('Created');
```