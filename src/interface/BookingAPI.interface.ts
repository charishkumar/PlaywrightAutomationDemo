//If you notice, there are 2 objects in the JSON request body. The first object is the main object which contains the properties of the booking. 
// The second object is the bookingdates object which contains the checkin and checkout dates. 
// We need to create 2 interfaces to represent these 2 objects. 
// The BookingAPI interface will represent the main object and the BookingDates interface will represent the bookingdates object.

interface BookingAPI {
    "firstname": string,
    "lastname":string,
    "totalprice": number,
    "depositpaid": boolean,
    "bookingdates": BookingDates,   //this is a nested object. So we are creating a separate interface for it. The BookingDates interface will represent the bookingdates object.
    "additionalneeds": string
}
interface BookingDates {
    "checkin": string,
    "checkout": string
}