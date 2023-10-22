/**
 * Classe base ICitiesReporter.
 * Esta classe define uma interface para relatórios de cidades.
 */
export default class ICitiesReporter{
    /**
     * Construtor da classe base ICitiesReporter.
     * Este construtor impede a criação de instâncias diretamente.
     */
    constructor(){
        // Verifica se a classe está sendo instanciada diretamente.
        if (new.target === ICitiesReporter) {
            throw new TypeError("Cannot construct ICitiesReporter instances directly");
        }
    }

    /**
     * Função abstrata para realizar a leitura de um arquivo.
     * Esta função deve ser implementada nas classes derivadas.
     * @param {string} filename - O nome do arquivo a ser lido.
     * @throws {Error} - Deve lançar um erro informando que o método deve ser implementado.
     */
    _read(filename){
        // Lança um erro informando que o método '_read()' deve ser implementado.
        throw new Error("Method '_read()' must be implemented.");
    }

   
}