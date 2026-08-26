//Import xlsx plugin
import fs from 'fs';                         //File system
import * as EXCEL from 'xlsx';   // Here EXCEL is an alias.

//Define test data structure.
interface TestRecord {
    Skill1 : string,
    Skill2 : string
}

// create method to read the excel file
export function readExcelFile(filePath:string){     //it accepts a parameter filePath as string

    //Read the excel file as binary string.
    const file = fs.readFileSync(filePath);          //use filesystem's readFileSync method which takes filePath as argument.

    //parse into workbook
    const workbook = EXCEL.read(file);               //EXCEL.read(file) method returns worknbook type, so we are assigning it workbook variable.

    //get first sheet
    const sheet = workbook.Sheets[workbook.SheetNames[0]]   //workbook.Sheets[workbook.SheetNames[0]] method returns sheet type and hence assigning it variable worksheet.

    //convert sheet into json
    const rawData:any[] = EXCEL.utils.sheet_to_json(sheet, {header:1})            //to convert sheet to json, we use EXCEL import, we use sheet_to_json method which takes sheet as one argument and an object which has row/header contains column name -- we are assigning the json data into rawData:any[] of any type and that has an array.

    //convert raw data into TestRecord type
    const records : TestRecord[] = rawData.slice(1).map((column:any) => ({
        Skill1 : column[0],
        Skill2 : column[1]
    }))

    //from rawData, we are slicing out first row which contails headers/column names and mapping column names 0 to Skill1 and column1 to Skill2
    // after getting the data, we are assiing it to variable records which is of type TestRecords having array of values

    //Finally we will return TestRecord from this readExcelFile() method.
    return records;

}