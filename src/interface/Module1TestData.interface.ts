export interface Module1TestData {
    Skill1: string;                 //defining the properties of the Module1TestData interface. These properties will be used to read data from the test data json files.
    Skill2: string;
    Skill3: string;
}
export interface TestData {
    Module1TestData?: Module1TestData;      // here we are converting the Module1TestData interface into 
    // optional property of TestData interface. So that we can use this TestData interface to read data from both qa and dev test data json files.
}