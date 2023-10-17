import ICitiesReporter from "./ICitiesReporter.js";

export default class CachedCitiesReporter extends ICitiesReporter{
    #cache = {};

    constructor(citiesReporter){
        super();
        this._citiesReporter = citiesReporter;
    }

    addCitiesReporter(citiesReporter){
        this._citiesReporter = citiesReporter;
    }

    _read(filename){
        if(!this.#cache[filename]){
            console.log('Não tem cache')
            this.#cache[filename] = this._citiesReporter._read(filename);
        }
        return this._citiesReporter.report(this.#cache[filename]);
    }

}