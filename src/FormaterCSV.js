import AbstractReportFormater from "./AbstractReportFormater.js";

export default class FormaterCSV extends AbstractReportFormater{
    constructor() {
        super();
    }
    
    outputReport(cities) {
        const header = 'id,name,state\n';
        const rows = cities.map(city => `${city.ID},${city.Nome},${city.Estado}\n`);
        return header + rows.join('');
    }
}