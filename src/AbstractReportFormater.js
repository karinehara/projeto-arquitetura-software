export default class AbstractReportFormater {
    constructor(){
      if(this.constructor === AbstractReportFormater){
        throw new Error("Cannot instantiate abstract class");
      }
    }
    outputReport(cities){
      throw new Error("Method 'outputReport()' must be implemented.");
    }
  }
  