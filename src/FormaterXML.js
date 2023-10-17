import AbstractReportFormater from "./AbstractReportFormater.js";

export default class FormaterXML extends AbstractReportFormater{
    constructor() {
        super();
    }
    
    outputReport(cities) {
        const header = '<cities>\n';
        const rows = cities.map(city => `  <city>\n    <id>${city.ID}</id>\n    <name>${city.Nome}</name>\n    <state>${city.Estado}</state>\n  </city>\n`);
        const footer = '</cities>';
        return header + rows.join('') + footer;
    }
}