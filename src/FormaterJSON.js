import AbstractReportFormater from "./AbstractReportFormater.js";

export default class FormaterJSON extends AbstractReportFormater{
    constructor(){
        super();
    }

    outputReport(cities){
        return JSON.stringify(cities);
    }
}