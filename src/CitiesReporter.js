import fs from 'node:fs';
import ICitiesReporter from "./ICitiesReporter.js";

export default class CitiesReporter extends ICitiesReporter {
    constructor({ formart }) {
        super();
        this._formart = formart;
    }

    _read(filename) {
        this._cities_json = fs.readFileSync(filename);
    }

    _parseJSON() {
        this._cities = JSON.parse(this._cities_json);
    }

    report(filename) {
        this._read(filename);
        this._parseJSON();
        return this._formart.outputReport(this._cities);
    }
}