import fs from 'node:fs';
import ICitiesReporter from "./ICitiesReporter.js";

export default class CitiesReporter extends ICitiesReporter {
    constructor({ formart }) {
        super();
        this._formart = formart;
    }

    _read(filename) {
        this._cities_json = fs.readFileSync(filename);
        return this._cities_json;
    }

    _parseJSON(cities) {
        // console.log(cities);
        this._cities = JSON.parse(cities);
    }

    report(cities) {
        // this._read(filename);
        this._parseJSON(cities);
        return this._formart.outputReport(this._cities);
    }
}