import AbstractReportFormater from "./AbstractReportFormater.js";

export default class CompositeReportFormater extends AbstractReportFormater {
  constructor() {
    super();
    this.reportFormaterList = [];
  }

  outputReport(cities) {
    let output = "";
    this.reportFormaterList.forEach((reportFormater) => {
      output += reportFormater.outputReport(cities);
    });
    return output;
  }

    addReportFormater(reportFormater) {
        this.reportFormaterList.push(reportFormater);
    }

    removeReportFormater(reportFormater) {
        this.reportFormaterList = this.reportFormaterList.filter((item) => {
            return item !== reportFormater;
        });
    }
}
