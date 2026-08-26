import fs from 'fs';
import path from 'path';
import { TestData } from '../interface/Module1TestData.interface';      //importing the TestData interface from the Module1TestData.interface.ts file. This interface defines the structure of the test data that will be read from the JSON files.

export async function loadTestDataFromJsonFile() {
    const environment = process.env.TEST_EXECUTION_ENV || 'qa'; // Get the test execution environment from the environment variable or default to 'qa'
    const directoryPath = path.join(__dirname, `../../test-data/${environment}`); // Construct the directory path based on the environment
    //const filePath = path.join(directoryPath, 'Module1TestData.json'); // Construct the full file path to the JSON file 

    const jsonData: TestData = {};
    fs.readdirSync(directoryPath).forEach((file) => {
        if (file === 'Module1TestData.json') {          //check if the file name is Module1TestData.json
            const filePath = path.join(directoryPath, file);
            const fileContent: TestData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            Object.assign(jsonData, fileContent);  //Merge the content of the JSON file into the jsonData object
        }
    });
    return jsonData;
}
