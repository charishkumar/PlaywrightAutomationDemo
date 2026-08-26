import {test, expect} from '@playwright/test';
import { formatAPIRequest } from '../../src/utils/APIHelpers';
import fs from 'fs';            // we need to import fs module to read the json file which is storing the post request body. We are using fs.readFileSync() method to read the file synchronously.
import path from 'path';        //we are importing path module to get the absolute path of the json file which is storing the post request body.

test.use({
    baseURL:process.env.BASE_API_URL,
})

test('POST API Request Test using Dynamic file in Playwright', async ({ request }) => {

    //assigning the path of the json file to a variable filePath. We are using path.join() method to join the directory name and the file name to get the absolute path of the file.
    const filePath = path.join(__dirname, '../../test-data/api_requests/Dynamic_POST_API_Request.json');
    //reading the json file and assigning it to a variable template. We are using fs.readFileSync() method to read the file synchronously. utf-8 is the encoding format which we are using to read the file. We are using utf-8 encoding format because the json file is in utf-8 format.
    const template = fs.readFileSync(filePath, 'utf-8');
    const values = ['Harish', 'Kumara', 1000, 'breakfast']; //array of values to replace the placeholders in the template.
    //calling the function formatAPIRequest() to replace the placeholders in the template with the values from the array. We are passing the template and the values array as arguments to the function. The function will return json file data in string format after replacing the values. We are storing that data in postAPIRequest variable.
    const postAPIRequest = await formatAPIRequest(template, values);

//Using request context, we are calling post method to send a post request to the endpoint. 
// We need to send the end point (/booking) that gets appended to baseURL and the data after replacing placeholders. Since the postAPIRequest is in String format, we are using JSON.parse() method to convert the string to JSON object before sending it to post request.
    const postAPIResponse =await request.post(`/booking`, {data: JSON.parse(postAPIRequest)});
    
    //we are assigning the response to a variable postAPIResponse and then we are converting the response to JSON format and assigning it to a variable postAPIResponseBody.
    const jsonPOSTAPIResponseBody = await postAPIResponse.json();
    //By using JSON.stringify(jsonPOSTAPIResponseBody) we are converting the JSON object to a string and then we are logging it to the console.
    //we are passing null and 2 as the second and third arguments to JSON.stringify() method to format the JSON object with 2 spaces indentation.
    //passing null to not to update jsonPOSTAPIRespoonseBody.

    //Print JSON API Responses.
    console.log(`POST API Response Body : ${JSON.stringify(jsonPOSTAPIResponseBody, null, 2)}`);  

    console.log(`Status Code: ${postAPIResponse.status()}`); //we are logging the status code of the response to the console.
    console.log(`Status Text: ${postAPIResponse.statusText()}`); //we are logging the status text of the response to the console.
    console.log(`Content Type: ${postAPIResponse.headers()['content-type']}`); //we are logging the content type of the response to the console.

    // Validate status code, status text and content type of the response.
    //Asserting the status code, status text and content type of the response to be 200, OK and application/json respectively.
    expect(postAPIResponse.status()).toBe(200); //we are asserting the status code of the response to be 200.
    expect(postAPIResponse.statusText()).toBe('OK'); //we are asserting the status text of the response to be OK.
    expect(postAPIResponse.headers()['content-type']).toContain('application/json'); //we are asserting the content type of the response to contain 'application/json'.

    //valiadate property / keys in the API Response Body.
    //using the jsonPOSTAPIResponseBody variable which is storing the response body in JSON format, we are accessing the properties / keys in the response body and asserting them to be present.
    expect(jsonPOSTAPIResponseBody).toHaveProperty('bookingid'); //we are asserting the response body to have property 'bookingid'.
    
    //validate API Response 
    //using the jsonPOSTAPIResponseBody variable which is storing the response body in JSON format, we are accessing the properties / keys in the response body and asserting them to have specific values.
    expect(jsonPOSTAPIResponseBody.bookingid).toBeGreaterThan(0); //We are asserting the response body to have value greater than 0 for the property 'bookingid'.
    expect(jsonPOSTAPIResponseBody.booking.firstname).toBe('Harish'); //We are asserting the response body to have value 'Harish' for the property 'firstname'.
    expect(jsonPOSTAPIResponseBody.booking.lastname).toBe('Kumara'); //We are asserting the response body to have value 'Kumar' for the property 'lastname'.
    expect(jsonPOSTAPIResponseBody.booking.totalprice).toBe(1000); //We are asserting the response body to have value '1000' for the property 'totalprice'.
    expect(jsonPOSTAPIResponseBody.additionalneeds).toBe('breakfast'); //We are asserting the response body to have value 'breakfast' for the property 'additionalneeds'.
})