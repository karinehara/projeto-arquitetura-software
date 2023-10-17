import CompositeReportFormater from "./src/CompositeReportFormater.js";
import FormaterHTML from "./src/FormaterHTML.js";
import fs from 'node:fs'
import CitiesReporter from "./src/CitiesReporter.js";
import CachedCitiesReporter from "./src/CachedCitiesReporter.js";
import FormaterJSON from "./src/FormaterJSON.js";
import FormaterCSV from "./src/FormaterCSV.js";
import FormaterXML from "./src/FormaterXML.js";

const filename = './data/cidades-2-teste.json';
let cities;



try {
  const fileContent = fs.readFileSync(filename, 'utf-8');
  cities = JSON.parse(fileContent);
  
//console.log(cities);
} catch (error) {
  console.error('Erro ao ler ou analisar o arquivo JSON:', error);
}


const compositeReportFormater = new CompositeReportFormater();
const html = new FormaterHTML();
const json = new FormaterJSON();
const csv = new FormaterCSV();
const xml = new FormaterXML();
// console.log(json.outputReport(cities));
// console.log(html.outputReport(cities));
// console.log(csv.outputReport(cities));
// console.log(xml.outputReport(cities));

compositeReportFormater.addReportFormater(html);
compositeReportFormater.addReportFormater(json);


compositeReportFormater.addReportFormater(csv);
compositeReportFormater.addReportFormater(xml);


// console.log(compositeReportFormater.outputReport(cities));

const citiesReporter = new CitiesReporter({ formart: compositeReportFormater });
let cachedCitiesReporter = new CachedCitiesReporter(citiesReporter);
console.log(cachedCitiesReporter._read(filename));

const citiesReporter2 = new CitiesReporter({ formart: html });
cachedCitiesReporter.addCitiesReporter(citiesReporter2);
console.log(cachedCitiesReporter._read(filename));

