import {test, expect} from '@playwright/test';
import { getAPIPostRequestBody } from '../../src/utils/APIHelpers'; // we need to import the function getAPIPostRequestBody from APIHelpers.ts file to create the post request body for the API request. We are using TypeScript interface to define the structure of the post request body. We are using the interface BookingAPI which is defined in src/interface/BookingAPI.interface.ts file. We are passing the values for the properties of the interface as arguments to the function and returning the post request body in JSON format.
import {faker} from '@faker-js/faker';

test.use({
    baseURL:process.env.BASE_API_URL,
})

test('Dynamic Type Safety POST API Request Test in Playwright', async ({ request }) => {

    //generating data for the POST API request body using faker.js library. We are generating random data for the properties of the request body.
    const firstName = faker.person.firstName(); //generating random first name using faker.person.firstName() method.
    const lastName = faker.person.lastName(); //generating random last name using faker.person.lastName() method.
    const totalPrice = faker.number.int({min: 1000, max: 5000}); //generating random total price using faker.number.int({min: 1000, max: 5000}) method.
    const additionalNeeds = faker.lorem.word(); //generating random additional needs using faker.lorem.word() method.
    const depositpaid = faker.datatype.boolean(); //generating random boolean value using faker.datatype.boolean() method.
    const checkin = faker.date.future().toISOString().split('T')[0]; //generating random future date using faker.date.future() method and converting it to ISO string format and splitting it to get only the date part.
    const checkout = faker.date.future().toISOString().split('T')[0]; //generating random future date using faker.date.future() method and converting it to ISO string format and splitting it to get only the date part. 
    
    //calling getAPIPostRequestBody() function to get the post request body. We are passing the generated data as arguments to the function. The function will return the post request body in JSON format.
    const postRequestBody = await getAPIPostRequestBody(firstName, lastName, totalPrice, depositpaid, additionalNeeds, checkin, checkout);

//Using request context, we are calling post method to send a post request to the endpoint. 
// We need to send the end point (/booking) that gets appended to baseURL and the data after replacing placeholders. Since the postAPIRequest is in String format, we are using JSON.parse() method to convert the string to JSON object before sending it to post request.
    const postAPIResponse =await request.post(`/booking`, {data: postRequestBody});
    
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
    expect(jsonPOSTAPIResponseBody.booking.firstname).toBe(firstName); //We are asserting the response body to have value 'Harish' for the property 'firstname'.
    expect(jsonPOSTAPIResponseBody.booking.lastname).toBe(lastName); //We are asserting the response body to have value 'Kumar' for the property 'lastname'.
    expect(jsonPOSTAPIResponseBody.booking.totalprice).toBe(totalPrice); //We are asserting the response body to have value '1000' for the property 'totalprice'.
    expect(jsonPOSTAPIResponseBody.booking.additionalneeds).toBe(additionalNeeds); //We are asserting the response body to have value 'breakfast' for the property 'additionalneeds'.
})