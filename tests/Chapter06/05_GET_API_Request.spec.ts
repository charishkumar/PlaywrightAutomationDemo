import { test, expect } from '@playwright/test';
import postAPIRequest from '../../test-data/api_requests/POST_API_Request.json';

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('Create GET API Request Test in Playwright', async ({ request }) => {

    //Using request context, we are calling post method to send a post request to the endpoint. We need to send the end point (/booking) that gets appended to baseURL and the data which is coming from the static JSON file (We have already imported that and stored in postAPIRequest).
    const postAPIResponse = await request.post(`/booking`, { data: postAPIRequest });

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

    // Validate status code, status text and content type of the response. Asserting the status code, status text and content type of the response to be 200, OK and application/json respectively.
    expect(postAPIResponse.status()).toBe(200); //we are asserting the status code of the response to be 200.
    expect(postAPIResponse.statusText()).toBe('OK'); //we are asserting the status text of the response to be OK.
    expect(postAPIResponse.headers()['content-type']).toContain('application/json'); //we are asserting the content type of the response to contain 'application/json'.

    //validate API Response, using the jsonPOSTAPIResponseBody variable which is storing the response body in JSON format, we are accessing the properties / keys in the response body and asserting them to have specific values.

    expect(jsonPOSTAPIResponseBody.bookingid).toBeGreaterThan(0); //asserting the response body to have value greater than 0 for the property 'bookingid'.
    expect(jsonPOSTAPIResponseBody.booking.firstname).toBe('Harish'); //asserting the response body to have value 'Harish' for the property 'firstname'.
    expect(jsonPOSTAPIResponseBody.booking.lastname).toBe('C'); //asserting the response body to have value 'Kumar' for the property 'lastname'.

    //GET API Request Test //we are storing the bookingid from the jsonPOSTAPIResponseBody in a variable bookingID. We will use this bookingID to send a get request to the endpoint /booking/{bookingID} to get the details of the booking.
    const bookingID = jsonPOSTAPIResponseBody.bookingid;
    console.log(`Booking ID: ${bookingID}`); //we are logging the bookingID to the console.
    //we are sending a get request to the endpoint /booking/{bookingID} to get the details of the booking. We are using template literals to pass the bookingID in the endpoint.
    const getAPIResponse = await request.get(`/booking/${bookingID}`);

    //validate status code, status text and content type of the response.
    expect(getAPIResponse.status()).toBe(200); //we are asserting the status code of the response to be 200.
    expect(getAPIResponse.statusText()).toBe('OK'); //we are asserting the status text of the response to be OK.

    //we are converting the response to JSON format and assigning it to a variable getAPIResponseBody.
    const getAPIJSONResponseBody = await getAPIResponse.json();

    //Print JSON API Responses.
    //By using JSON.stringify(getAPIJSONResponseBody) we are converting the JSON object to a string and then we are logging it to the console. we are passing null and 2 as the second and third arguments to JSON.stringify() method to format the JSON object with 2 spaces indentation. passing null to not to update getAPIJSONResponseBody.

    console.log(`GET API Response Body : ${JSON.stringify(getAPIJSONResponseBody, null, 2)}`);


})