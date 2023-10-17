export default class ICitiesReporter{
    constructor(){
        if (new.target === ICitiesReporter) {
            throw new TypeError("Cannot construct ICitiesReporter instances directly");
        }
    }

    _read(filename){
        throw new Error("Method '_read()' must be implemented.");
    }

   
}