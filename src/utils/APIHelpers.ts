export async function formatAPIRequest(template: string, values:any[]): Promise<string> {
    return template.replace(/{(\d+)}/g, (match, p1) => {
        const index = parseInt(p1, 10);
        if (index < 0 || index >= values.length) {
            throw new Error(`Index ${index} is out of bounds for the provided values array.`);
        }
        return index < values.length ? String(values[index]) : match;
    });
}

//This function is used to create the post request body for the API request. We are using TypeScript interface to define the structure of the post request body. We are using the interface BookingAPI which is defined in src/interface/BookingAPI.interface.ts file. We are passing the values for the properties of the interface as arguments to the function and returning the post request body in JSON format.
export async function getAPIPostRequestBody(fname:string, lname:string, totalPrice:number, depositpaid: boolean, additionalNeeds:string, checkin:string, checkout:string) {
    const postRequestBody : BookingAPI = {
        "firstname": fname,
        "lastname": lname,
        "totalprice": totalPrice,
        "depositpaid": depositpaid,
        "bookingdates": {
            "checkin": checkin,
            "checkout": checkout
        },
        "additionalneeds": additionalNeeds
    };
    //return JSON.stringify(postRequestBody);
    return postRequestBody;
}   