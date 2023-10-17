import ICitiesReporter from "./ICitiesReporter.js";

export default class CachedCitiesReporter extends ICitiesReporter{
    
    #cache = {};
    
    constructor(citiesReporter){
        super();
        this._citiesReporter = citiesReporter;
    }

    _read(filename){
        console.log(this.#cache)
        if(this.#cache[filename]){
            return this.#cache[filename];
        }else {
            this.#cache[filename] = this._citiesReporter.report(filename);
            return this.#cache[filename];
        }
    }
}